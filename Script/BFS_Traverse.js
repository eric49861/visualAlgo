$(document).ready(function(){
	alert("点击遍历后，点击>继续")
});
function Graph_DFS_Show() {
    document.getElementById("display").onclick = function () {
        var btn = document.getElementById("DFS");
        btn = null;
    }
    var jsav = new JSAV("av");
    var initGraph = function (opts) {
        var g = jsav.ds.graph($.extend({ width: 500, height: 350 }, opts));
        var a = g.addNode("A"),
            b = g.addNode("B"),
            c = g.addNode("C"),
            d = g.addNode("D"),
            e = g.addNode("E"),
            f = g.addNode("F"),
            h = g.addNode("H"),
            i = g.addNode("I");
        g.addEdge(a, b);
        g.addEdge(a, c);
        g.addEdge(b, d);
        g.addEdge(e, a);
        g.addEdge(d, e);
        g.addEdge(d, f);
        g.addEdge(a, h);
        g.addEdge(c, i);
        g.addEdge(e, c);
        g.addEdge(f, h);
        return g;
    };
    // var g2 = initGraph({ layout: "automatic" });
    // g2.layout();
    //g2.hide();
    var graph = initGraph({ layout: "automatic" });
    graph.layout();
    jsav.displayInit();
    jsav.umsg("点击相应功能按钮后，请点击相应尖括号查看单步执行结果!!!");
    document.getElementById("BFS").onclick = function () {
        jsav.step();
        var visit = function (node) {
            node.addClass("visited");
            jsav.umsg("节点" + node.value() + "调用广度优先搜索");
            jsav.step();
        };
        var postVisit = function (node) {
            node.addClass("finished");
            jsav.umsg("完成节点" + node.value() + "的遍历");
            jsav.step();
        };
        var BFS = function (node, callback) {
            var queue = [];
            visit(node);
            queue.push(node);
            while (queue.length != 0) {
                var u = queue.shift();
                var neighbors = u.neighbors();
                visit(u);
                for (var i = 0; i < neighbors.length; i++) {
                    var w = neighbors[i];
                    if (!w.hasClass("visited")) {
                        visit(w);
                        queue.push(w);
                    }
                }
                postVisit(u);
                if (callback) {
                    callback(u);
                }
            };
        };
        BFS(graph.nodes()[0]);
        jsav.recorded();
    };
}