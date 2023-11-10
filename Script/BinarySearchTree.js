function binaryTreeShow() {
    var av = new JSAV("av");
    var binaryTree = av.ds.binarytree();
    var arr = [];
    var newArr = []
    arr = document.getElementById("input").value.split(",");
    newArr = (function () {
        var set = new Set(arr);
        return Array.from(set);
    }());
    for (var i = 0; i < newArr.length; i++) {
        av.step();
        addTreeNode(newArr[i]);
    }
    // document.getElementById("display").onclick = function () {
    //     var btn = document.getElementById("display");
    //     btn = null;
    // };
    document.getElementById("addTreeNode").onclick = function () {

        var nodeValue = document.getElementById("input").value;
        av.step();
        addTreeNode(nodeValue);
        // binaryTree.layout();
    };
    document.getElementById("preOrder").onclick = function () {
        var array = [];
        function preOrder(node) {
            array.push(node);
            //alert(node.value());
            if (node.left() != undefined) {
                preOrder(node.left());
            }
            if (node.right() != undefined) {
                preOrder(node.right());
            }
        };
        function display() {
            for (var i = 0; i < array.length; i++) {
                av.step();
                array[i].css({ "background-color": "red" });
                binaryTree.layout();
                av.step();
                array[i].css({ "background-color": "white" });
                binaryTree.layout();
            }
        };
        preOrder(binaryTree.root());
        display();
    }
    document.getElementById("midOrder").onclick = function () {
        var array = [];
        function midOrder(node) {
            if (node.left() != undefined) {
                midOrder(node.left());
            }
            array.push(node);
            if (node.right() != undefined) {
                midOrder(node.right());
            }
        };
        function display() {
            for (var i = 0; i < array.length; i++) {
                av.step();
                array[i].css({ "background-color": "red" });
                binaryTree.layout();
                av.step();
                array[i].css({ "background-color": "white" });
                binaryTree.layout();
            }
        };
        midOrder(binaryTree.root());
        display();
    };
    document.getElementById("postOrder").onclick = function () {
        var array = [];
        function postOrder(node) {
            if (node.left() != undefined) {
                postOrder(node.left());
            }
            if (node.right() != undefined) {
                postOrder(node.right());
            }
            array.push(node);
        };
        function display() {
            for (var i = 0; i < array.length; i++) {
                av.step();
                array[i].css({ "background-color": "red" });
                binaryTree.layout();
                av.step();
                array[i].css({ "background-color": "white" });
                binaryTree.layout();
            }
        };
        postOrder(binaryTree.root());
        display();
    };
    av.recorded();

    $(".jsavtreenode").live = ("hover", function () {
    });
    $("path").live = ("hover", function () {
    });
    function addTreeNode(value) {
        if (binaryTree.root().value() == "") {
            var node = binaryTree.newNode(parseInt(value));
            binaryTree.root(node);
        } else {
            var node = binaryTree.newNode(parseInt(value));
            add(binaryTree.root(), node);
            binaryTree.layout();
        }
    };
    function add(n, node) {
        if (node == undefined) {
            return;
        }
        if (node.value() == n.value()) {
            node.hide();
            return;
        }
        if (n.value() > node.value()) {
            if (n.left() == undefined) {
                n.left(node);
            } else {
                add(n.left(), node);
            }
        } else {
            if (n.right() == undefined) {
                n.right(node);
            } else {
                add(n.right(), node);
            }
        }
    };

}

