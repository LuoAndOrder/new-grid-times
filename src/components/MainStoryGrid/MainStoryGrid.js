import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <TabletSecondaryStoryListWrapper>
          <StoryList>
            {SECONDARY_STORIES.map((story, index) => (
              <SecondaryStory key={story.id} variant="vertical" {...story} />
            ))}
          </StoryList>
        </TabletSecondaryStoryListWrapper>
        <DesktopMobileSecondaryStoryListWrapper>
          <StoryList>
            {SECONDARY_STORIES.map((story, index) => (
              <SecondaryStory key={story.id} variant="horizontal" {...story} />
            ))}
          </StoryList>
        </DesktopMobileSecondaryStoryListWrapper>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --padding: 16px;

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      'main-story secondary-stories'
      'main-story secondary-stories'
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    
    gap: 0px;
    margin-bottom: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 509px 418px 273px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0px;
    margin-bottom: 64px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: var(--padding);
    margin-right: var(--padding);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: var(--padding);
    margin-right: var(--padding);
  }
`;

const TabletSecondaryStoryListWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const DesktopMobileSecondaryStoryListWrapper = styled.div`
  display: block;

  @media ${QUERIES.tabletOnly} {
    display: none;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  & > *:not(:first-child) {
    padding-top: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 32px;

    & > *:not(:last-child) {
      padding-bottom: revert;
      border-bottom: revert;
    }

    & > *:not(:first-child) {
      padding-top: revert;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    margin: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: var(--padding);
    margin-top: var(--padding);
  }
`;

export default MainStoryGrid;
