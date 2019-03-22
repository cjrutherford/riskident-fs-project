import app from './app';
import log from './log';

const server = app.listen(app.get('port'), (err: Error) => {
    if(err) log.error(err);
    log.info(`server is listening for requests. Open: http://localhost:${app.get('port')}/graphql`);
});

export default server;