import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .content {
    box-shadow: 0px 4.89945650100708px 12.248641014099121px -3.2663042545318604px
      #00000033;
    display: flex;
    position: relative;

    .title {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 63.36px;
      font-size: 64px;
      color: #ffffff;

      > div {
        text-shadow: 3px 2px 2px 0px #00000099;
      }
    }
  }

  .info {
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__label {
      display: inline-block;
      vertical-align: middle;
    }

    .rectangle {
      display: inline-block;
      vertical-align: middle;
      background-color: red;

      height: 19.76px;
      width: 19.76px;
    }

    .separator {
      height: 1px;
      background-color: #e9e9e9;
      width: 70%;
    }

    .timer {
      font-size: larger;
      font-weight: bold;
    }
  }
`;

export default function WhatIsHappening() {
  return (
    <Container>
      <div className="content">
        <div className="title">
          <div>Paul Robertson</div>
          <div>&quot;Pixel World&quot;</div>
        </div>
        <div className="info">
          <h2>
            <span className="rectangle">&nbsp;</span>
            <span className="info__label">DROP IS LIVE</span>
          </h2>
          <div className="separator">&nbsp;</div>
          <p className="timer">02h 30m 21s</p>
        </div>
        <img className="current-event" src="assets/whats-happening-1.png" />
        <img className="current-event" src="assets/whats-happening-2.png" />
        <img className="current-event" src="assets/whats-happening-3.png" />
      </div>
    </Container>
  );
}
