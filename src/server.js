const startServer = (app, port) => {
  const fail_msg = `😿 Failed to listen on PORT ${port}`;
  const succ_msg = `😸 Application server listening on PORT ${port}`;

  const errorCallback = (err) => {
    if(err){
        throw Error(fail_msg);
    } else {
        console.log(succ_msg);
    }
  };

  app.listen(port, errorCallback);
};

export default startServer;
