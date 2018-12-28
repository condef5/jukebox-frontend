import merge from 'lodash.merge';
import singers from './singers';
import search from './search';
import genders from './genders';
import videoclips from './videoclips';

const resolvers = merge(singers, genders, videoclips, search);

export default resolvers;
