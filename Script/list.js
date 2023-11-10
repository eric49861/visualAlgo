function listShow() {
    var av = new JSAV("container");
    var arr = [];
    var ele = document.getElementById("input").value;
    var arr = ele.split(",");
    var list = av.ds.list();
    // av.displayInit();
    for (var i = 0; i < arr.length; i++) {
        addNode(av, arr[i], list);
    }
    document.getElementById("display").onclick = function () {
        let btn = document.getElementById("display");
        btn = null;
    };
    document.getElementById("headInsert").onclick = function () {
        let value = document.getElementById("input").value;
        av.step();
        list.addFirst(value);
        list.layout();
    };
    document.getElementById("tailInsert").onclick = function () {
        let value = document.getElementById("input").value;
        av.step();
        list.addLast(value);
        list.layout();
    };
    document.getElementById("insert").onclick = function () {
        av.step();
        index = document.getElementById("insert_index").value;
        value = document.getElementById("insert_value").value;
        if (index == 0) {
            list.addFirst(value);
            list.layout();
            return;
        }
        list.add(index, value);
        list.layout();
    };
    document.getElementById("remove").onclick = function () {
        av.step();
        let value = document.getElementById("remove_index").value;
        if (value == 0) {
            list.removeFirst();
            list.layout();
            return;
        }
        list.remove(value)
            .hide()
            .edgeToNext().hide();
        list.layout();
    }
    av.recorded();
    // av.umsg("We start by creating a list and adding some elements..");
    // list.addFirst(1)
    //     .addFirst(2)
    //     .addFirst(4);
    // list.layout();
    // av.displayInit();
    // av.umsg("Add a new item to the beginning with addFirst(..) and set a label on the edge");
    // av.step();
    // l.addFirst(7, { edgeLabel: "e1" });
    // l.layout();
    // av.step();
    // av.umsg("Add another item by first manually creating the new node; looks the same visually, check the source code");
    // av.step();
    // l.addFirst(l.newNode(11));
    // l.layout();
    // av.step();
    // av.umsg("Add an item to the end of the list");
    // av.step();
    // l.addLast(99);
    // l.layout();
    // av.step();
    // av.umsg("Remove the item in index 2 (3rd item)");
    // av.step();
    // l.remove(2) // remove the node
    //     .hide()   // hide it
    //     .edgeToNext().hide(); // and hide the edge to next
    // l.layout();

    // av.step();
    // av.umsg("We create a new node and position it absolutely..")
    // av.step();
    // var n3 = l.newNode(3);
    // n3.css({ left: 145, top: 70 }); // set the position for the new node
    // av.step();
    // av.umsg("..add the new node to the list..");
    // av.step();
    // var node = l.get(1).next();
    // l.get(1).next(n3);
    // n3.next(node);
    // l.layout({ updateTop: false }); // control that top coordinate of nodes should not be recalculated
    // av.step();
    // av.umsg("..and finally move the node to its correct position in the list");
    // av.step();
    // l.layout();
    function addNode(av, value, list) {
        av.step();
        list.addFirst(value);
        list.layout();
    };
};


