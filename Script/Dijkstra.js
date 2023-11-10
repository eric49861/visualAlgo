function Graph_Dijkstra_Show() {
    document.getElementById("display").onclick = function () {
        var btn = document.getElementById("DFS");
        btn = null;
    }
    var jsav = new JSAV("av");
    function initGraph(opts, dir) {
        var g = jsav.ds.graph($.extend({ width: 500, height: 350 }, opts, dir));
        var a = g.addNode("A"),
            b = g.addNode("B"),
            c = g.addNode("C"),
            d = g.addNode("D"),
            e = g.addNode("E");
        g.addEdge(a, b, 10).label(10);
        g.addEdge(a, c, 20).label(20);
        g.addEdge(b, d, 15).label(15);
        g.addEdge(e, a, 8).label(8);
        g.addEdge(d, e, 1).label(1);
        g.addEdge(e, c, 2).label(2);
        return g;
    };
    var vertex_vector = jsav.ds.array(['A', 'B', 'C', 'D', 'E']);
    vertex_vector.layout();
    var matrix = jsav.ds.matrix(
        [[0, 10, 20, '∞', '∞'],
        ['∞', 0, '∞', 15, '∞'],
        ['∞', '∞', 0, '∞', '∞'],
        ['∞', '∞', '∞', 0, 1],
        [8, 0, 2, '∞', 0]],
        { rows: 5, colums: 5, style: "matrix" }
    );
    matrix.layout();
    var graph = initGraph({ layout: "automatic", directed: "true" });
    graph.layout();

    jsav.displayInit();
    // jsav.step();
    jsav.umsg("点击相应功能按钮后，请点击相应尖括号查看单步执行结果!!!");
    document.getElementById("dijkstra").onclick = function () {
        // jsav.step();
        jsav.umsg("不好意思，源点必须从A点出发!!!");
        var adj = [
            [0, 10, 20, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
            [Number.POSITIVE_INFINITY, 0, Number.POSITIVE_INFINITY, 15, Number.POSITIVE_INFINITY],
            [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
            [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 1],
            [8, 0, 2, Number.POSITIVE_INFINITY, 0],
        ];
        var Dij_Matrix = [];
        var isReach = [];
        var result = [];
        var reach = [];
        function Dijkstra_ShortPath(v) {
            for (let i = 0; i < graph.nodeCount(); i++) {
                Dij_Matrix.push(adj[v][i]);
                isReach.push(false);
            }
            isReach[v] = true;
            var mipath;
            var mipos;

            for (let i = 1; i < graph.nodeCount(); i++) {
                mipath = 32767;
                mipos = v;
                reach.push(isReach);
                result.push(Dij_Matrix);
                for (let k = 0; k < graph.nodeCount(); k++) {
                    if (isReach[k] == false && Dij_Matrix[k] < mipath) {
                        mipath = Dij_Matrix[k];
                        mipos = k;
                    }
                }
                isReach[mipos] = true;
                for (let p = 0; p < graph.nodeCount(); p++) {
                    if (isReach[p] == false) {
                        Dij_Matrix[p] = Math.min(Dij_Matrix[p], Dij_Matrix[mipos] + adj[mipos][p]);
                    }
                }
            }
            //console.log(Dij_Matrix);
        }
        Dijkstra_ShortPath(0);
        var result_1 = jsav.ds.matrix(reach);
        result_1.layout();
        var result_2 = jsav.ds.matrix(result);
        result_2.layout();
    };
    jsav.recorded();
}