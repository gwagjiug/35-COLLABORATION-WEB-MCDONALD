import React, { useEffect, useRef, useState } from 'react';
import * as S from './HomeCard.style';
import { calculateLine } from '@utils/calculateLine';

export interface HomeCardProps {
  img: React.ReactNode;
  title: string;
}

const HomeCard = ({ img, title }: HomeCardProps) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [isThreeLines, setIsThreeLines] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      const lines = calculateLine(titleRef.current);
      setIsThreeLines(lines >= 3);
      setIsReady(true);
    }
  }, [title]);

  return (
    <section css={S.CardStyle}>
      <div css={S.ImgStyle}>{img}</div>
      <div css={S.TitleStyle(isThreeLines)}>
        <p ref={titleRef}>{title}</p>
      </div>
    </section>
  );
};

export default HomeCard;
