import defaults from './default';
import devConfig from './development';
import productionConfig from './production';

// Choose which config to use
const isProd = process.env.NODE_ENV === 'production'
const config = isProd ? productionConfig : devConfig;

// Combine configurations into a single config JSON
export default { ...defaults, ...config, isProd };
