    function cos (x) {
        var y=new Array(x.length);
        for (var i = 0; i < x.length; i++) {
            y[i]=Math.cos(x[i]);
        };
        return y;
    }
    function sin (x) {
        var y=new Array(x.length);
        for (var i = 0; i < x.length; i++) {
            y[i]=Math.sin(x[i]);
        };
        return y;
    }