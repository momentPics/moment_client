import 'swiper/css';
import 'swiper/css/pagination';
import './albumSwiper.css';

import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAtomValue, useSetAtom } from 'jotai';
import type { SwiperClass } from 'swiper/react';
import { useState } from 'react';
import * as S from './AlbumDetail.styled';

import { Album } from '../../../../types/album';
import { activeSliderStore } from '../../../../stores/activeSliderStore';
import { albumDetailStore } from '../../../../stores/albumDetailStore';
import { messageStore } from '../../../../stores/messageStore';
import useInfinityAlbum from '../../../../hooks/api/useInfinityAlbum';
import useIntersectionObserver from '../../../../hooks/common/useInfinityObserver';
import { userStore } from '../../../../stores/userStore';

const AlbumDetailSwiper = () => {
  const users = useAtomValue(userStore)!;
  const [thumsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const activeSlider = useAtomValue(activeSliderStore);
  const setAlbumDetails = useSetAtom(albumDetailStore);
  const setIsActive = useSetAtom(messageStore);
  const { data: albumDetailData, fetchNextPage, hasNextPage } = useInfinityAlbum(users?.accessToken);
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleActiveAlbumSave = (swiper: SwiperClass) => {
    const currentImage = albumDetailData?.pages.filter(
      (_: any, index: number) => index === swiper.activeIndex,
    )[0] as any as Album;

    setAlbumDetails({ ...currentImage, activeIndex: swiper.activeIndex });
    setIsActive((prev) => ({
      ...prev,
      isMessageOpen: currentImage?.contentCheck,
      isSwiperCheck: prev.isSwiperCheck + 1,
    }));
  };

  return (
    <S.Container>
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumsSwiper && !thumsSwiper.destroyed ? thumsSwiper : null }}
        modules={[Thumbs, Navigation]}
        className="mainSwiper"
        initialSlide={activeSlider}
        onSlideChange={handleActiveAlbumSave}
        onSlidesLengthChange={handleActiveAlbumSave}
      >
        {albumDetailData?.pages.map((album: any) => (
          <SwiperSlide key={album.imageId}>
            <img src={album.accessUrl} alt={album.originName} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView="auto"
        centeredSlides
        modules={[Navigation, Thumbs]}
        slideToClickedSlide
        pagination={{
          clickable: true,
        }}
        className="thumbSwiper"
        initialSlide={activeSlider}
      >
        {albumDetailData?.pages.map((album: any, index: number) => (
          <SwiperSlide key={album.imageId}>
            <img src={album.resizeUrl} alt={album.originName} />
            {albumDetailData.pages.length - 3 === index && <div ref={setTarget} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default AlbumDetailSwiper;
