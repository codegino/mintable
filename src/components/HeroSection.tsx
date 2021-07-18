import React from 'react';
import styled from '@emotion/styled';

const Container = styled.main`
  background-color: #f4f4f4;
  position: relative;
  width: 100%;
  display: grid;
  height: 640px;
  grid-template-columns: 1fr 1fr;
`;

const HeroDescription = styled.div`
  padding: 10%;
  p {
    line-height: 28.8px;
    margin: 0;
  }

  h3 {
    font-size: 48px;
    margin: 0;
    line-height: 57.6px;
    margin-bottom: 20px;
  }
`;

const HeroSample = styled.div`
  position: relative;
  padding-left: 100px;

  .background {
    clip: rect(60px, 1000px, 600px, 200px);
    position: absolute;
    height: 110%;
    width: 70%;
    background: rgb(85, 13, 237);
    background: linear-gradient(
      90deg,
      rgba(85, 13, 237, 1) 0%,
      rgba(185, 152, 255, 1) 100%
    );
    transform: rotate(15deg) translate(20px, -40px);
    left: 105px;
  }

  .sample {
    box-shadow: 0px 0px 1px 1px rgba(170, 170, 170, 0.64);
    background-color: #ffffff;
    position: relative;
    z-index: 2;
    height: 499px;
    width: 499px;
    border-radius: 15px;
    top: 20px;

    > img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

  .artist {
    padding-left: 7px;
    padding-bottom: 9px;
    box-shadow: 0px 0px 1px 1px rgba(170, 170, 170, 0.64);
    display: flex;
    text-align: left;
    height: 40px;
    background-color: #ffffff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    &__image {
      border-radius: 50%;
      margin-right: 3px;
    }

    &__name {
      font-size: 16px;
    }

    .label {
      font-size: 12px;
      color: rgba(45, 45, 45, 0.6);
      font-weight: 400;
    }
  }
`;

const ActionButton = styled.button<{backgroundColor: string}>`
  height: 40px;
  color: #ffffff;
  background-color: ${props => props.backgroundColor};
  border-radius: 2px;
  padding: 13px 20px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`;

const DiscordButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5865f2;
  box-shadow: 0px 5px 0px 0px #4251f8;
  border: none;
  border-radius: 8px;
  height: 50px;
  box-sizing: border-box;
  width: 287px;
  position: absolute;
  bottom: 0;
  left: 40%;
  transform: translateY(50%);

  > img {
    margin-right: 14px;
  }

  > p {
    color: #ffffff;
  }
  /* style={{marginRight: '14px'}}  */
`;

export default function HeroSection() {
  return (
    <Container>
      <HeroDescription>
        <p>
          Completely free to mint your first <b>NFT</b>
        </p>
        <h3>Turn any creation info an item on the blockchain</h3>
        <p>
          Trade digital items on <b>Mintable</b> to easily earn crypto
        </p>
        <div style={{marginTop: '30px'}}>
          <ActionButton backgroundColor="#550DED">
            Start Minting Now
          </ActionButton>
          <ActionButton backgroundColor="#5168E1">Shop Now</ActionButton>
        </div>
      </HeroDescription>
      <HeroSample>
        <div className="background">&nbsp;</div>
        <div className="sample">
          <img src="assets/hero-sample.png" />
          <div className="artist">
            <div>
              <img className="artist__image" src="assets/dan-mumford.png" />
            </div>
            <div className="artist__details">
              <div className="artist__name">Dan Mumford</div>
              <div className="label">Artist</div>
            </div>
          </div>
        </div>
      </HeroSample>
      <DiscordButton>
        <img src="assets/discord-logo.svg" />
        <p>Join our discord community</p>
      </DiscordButton>
    </Container>
  );
}
