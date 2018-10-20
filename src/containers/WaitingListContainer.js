import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import WaitingList from '../components/WaitingList';

const addFieldsVideos = (videos, list) =>
  videos.filter(video => !!list.find(item => item.video_id === video.id));

const WAINTING_QUERY = gql`
  {
    waitings @client {
      video_id
    }
    videoclips @client {
      id
      name
      url
      singer_id
      author
    }
  }
`;

const withVideos = graphql(WAINTING_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { videos: [] };
    return {
      videos: addFieldsVideos(data.videoclips, data.waitings)
    };
  }
});

export default withVideos(WaitingList);
