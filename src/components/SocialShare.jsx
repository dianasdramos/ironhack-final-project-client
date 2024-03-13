import React from 'react';
import { useParams } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const API_URL = "http://localhost:5005/api";

function SocialShare() {
  const {id} = useParams();

    return (
      <div>
        <div>
          <FacebookShareButton
              url={`${API_URL}/photos/${id}`}
              hashtag="#VintagePhoto">
              <FacebookIcon size={28} round />
          </FacebookShareButton>
        </div>
      <div>
          <TwitterShareButton
              url={`${API_URL}/photos/${id}`}
              title={'Good memories!'}
              hashtags={["#VintagePhoto"]}>
              <TwitterIcon size={28} round />
          </TwitterShareButton>
      </div>
      <div>
          <WhatsappShareButton
              url={`${API_URL}/photos/${id}`}
              title={'Good memories!'}>
              <WhatsappIcon size={28} round />
          </WhatsappShareButton>
      </div>
  </div>  
  );

}

export default SocialShare;