exports.collectContentPre = function(hook, context){
  var sizes = /(?:^| )sizes:([A-Za-z0-9]*)/.exec(context.cls);
  if(sizes && sizes[1]){
    context.cc.doAttrib(context.state, sizes[0]);
  }
};

// never seems to be run
exports.collectContentPost = function(hook, context){
  var tname = context.tname;
  var state = context.state;
  var lineAttributes = state.lineAttributes
  var tagIndex = tname;

  if(tagIndex >= 0){
    delete lineAttributes['sub'];
  }
};
