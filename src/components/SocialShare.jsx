import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

function SocialShare() {
    return (
      <div>
        <div>
          <FacebookShareButton
              url={`https://www.example.com`}
              hashtag="#Test">
              <FacebookIcon size={28} round />
          </FacebookShareButton>
        </div>
      <div>
          <TwitterShareButton
              url={`https://www.example.com`}
              title={'Dummy text!'}
              hashtags={["#Test"]}>
              <TwitterIcon size={28} round />
          </TwitterShareButton>
      </div>
      <div>
          <WhatsappShareButton
              url={`https://www.example.com`}
              title={'Dummy text!'}>
              <WhatsappIcon size={28} round />
          </WhatsappShareButton>
      </div>
  </div>  
  );

}

export default SocialShare;