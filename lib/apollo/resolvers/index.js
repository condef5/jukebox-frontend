import merge from 'lodash.merge';
import singers from './singers';
import search from './search';
import genders from './genders';
import videoclips from './videoclips';
import waitings from './waitings';

const resolvers = merge(singers, genders, videoclips, waitings, search);

export default resolvers;
