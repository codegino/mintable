import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    padding-inline-start: 0;
    list-style-type: none;
    justify-content: center;

    li {
      width: 308px;
      margin: 0 10px;
    }
  }
`;

const CreationContainer = styled.div`
  position: relative;
  box-shadow: 0px 6px 15px -4px #00000033;

  .featured-label {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 23px;
    border-radius: 25px;
    width: 82px;
    text-transform: uppercase;
    background-color: #fff6d8;
    color: #ecb80b;
    padding: 0px 14px;
  }

  .like {
    position: absolute;
    top: 10px;
    right: 10px;
    background-image: url(assets/like-icon.svg);
    background-repeat: no-repeat;
    height: 36px;
    width: 36px;
    background-color: #ffffff;
    border-radius: 50%;
    background-position: center;
  }

  .title {
    text-align: left;
    font-weight: bold;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    margin: 36px 0;
    text-align: left;
  }

  .user {
    display: flex;
    align-items: center;
    &__image {
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  .visits {
    position: relative;
    display: flex;
    align-items: center;
  }

  .like-icon {
    height: 12px;
    width: 12px;
  }

  .view-icon {
    height: 20px;
    width: 20px;
  }
`;

function Creation({img, user}: {img: string; user: string}) {
  return (
    <CreationContainer>
      <div className="featured-label">Featured</div>
      <div className="like">&nbsp;</div>
      <img src={`assets/creation-${img}.png`} />
      <div style={{padding: '10px'}}>
        <div className="title">Dragon Rider on Lava Planet</div>
        <div className="price">$4764 (Ξ2.1)</div>
        <div className="summary">
          <div className="user">
            <img className="user__image" src={`assets/user-${user}.png`} />
            <span className="username">Exit Man</span>
          </div>
          <div className="visits">
            <img src="assets/like-icon.svg" className="like-icon" />
            <span style={{margin: '0 5px'}}>69</span>
            <img src="assets/view-icon.svg" className="view-icon" />
            <span style={{margin: '0 5px'}}>100</span>
          </div>
        </div>
      </div>
    </CreationContainer>
  );
}

export default function PromotedCreations() {
  return (
    <Container>
      <h2>Promoted Creations</h2>
      <ul>
        <li>
          <Creation img="1" user="1" />
        </li>
        <li>
          <Creation img="2" user="2" />
        </li>
        <li>
          <Creation img="3" user="3" />
        </li>
        <li>
          <Creation img="4" user="4" />
        </li>
      </ul>
    </Container>
  );
}
