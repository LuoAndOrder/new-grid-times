import React from 'react';
import styled from 'styled-components/macro';

const SecondaryStory = ({ id, title, image, location, abstract, variant = 'horizontal' }) => {
  let WrapperComponent;
  if (variant === 'horizontal') {
    WrapperComponent = HorizontalWrapper;
  } else if (variant === 'vertical') {
    WrapperComponent = VerticalWrapper;
  } else {
    throw new Error(`Invalid variant ${variant}`);
  }
  
  return (
    <a href={`/story/${id}`}>
      <WrapperComponent>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <AbstractWrapper>
          <Abstract>{abstract}</Abstract>
        </AbstractWrapper>
      </WrapperComponent>
    </a>
  );
};

const HorizontalWrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);
`;

const VerticalWrapper = styled(HorizontalWrapper)`
  grid-template-columns: 1fr;
  grid-template-areas:
    'image'
    'heading'
    'abstract';
  gap: 8px;
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const AbstractWrapper = styled.div`
  grid-area: abstract;
`;

const Abstract = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* necessary for line-clamping */
  overflow: hidden;
`;

export default SecondaryStory;
