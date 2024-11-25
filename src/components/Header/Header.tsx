import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { BtnMenu, CmpBtnBack, ImgHeaderLogo } from '@assets/svgs';
import SideBar from '@components/SideBar/SideBar';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLine, setIsLine] = useState(false);

  // 사이드 바 열고 닫기
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 스크롤 시 border-bottom 추가
  const handleScroll = () => {
    setIsLine(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 상세 페이지 확인
  const isDetailPage = false; // 라우팅 설정 후 pathname에 따라 상세페이지면 true가 되게끔 수정 예정

  return (
    <>
      <header css={S.HeaderContainer(isLine)}>
        {isDetailPage ? (
          <section css={S.BackNav} onClick={() => navigate(-1)}>
            <CmpBtnBack width={10.5} height={22} />
            <span>List</span>
          </section>
        ) : (
          <ImgHeaderLogo width={74} height={62} />
        )}
        <BtnMenu onClick={toggleSidebar} width={74} height={62} />
      </header>
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default React.memo(Header);