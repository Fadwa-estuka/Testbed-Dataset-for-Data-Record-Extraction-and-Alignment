// Redefine some behaviors for templating and serialization
_.templateSettings = {
    interpolate : /\<\<(.+?)\>\>/g,
    evaluate: /\<\[(.+?)\]\>/g
};