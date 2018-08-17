import logger from './project/logger/app-logger'
import config from './project/config/config.dev'
import app from './project/core'

const port = config.serverPort;
app.listen(port, () => {
    logger.info('server started - ', port);
});
