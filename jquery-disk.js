(function ( $ ) {
 
    $.widget( "nmk.disk", {

        // Default options.
        options: {
            rows: 20,
            cols: 20
        },

        _create: function() {

            var rowCount = this.options.rows;
            var colCount = this.options.cols;

            var drive = this.element;

            //
            for (var row = 0; row < rowCount; row++) {
              var cluster = $('<div class="cluster" data-id="' + row + '"></div>');
              drive.append(cluster);
              //
              for (var col = 0; col < colCount; col++) {
                var node = $('<div class="node" data-id="' + col + '"></div>');
                cluster.append( node );
              }
            }
 
        },

        item: function(row, col) {
            var result = null;
            //
            //console.log(row + 'x' + col);
            //
            var clusters = this.element.find('.cluster');
            clusters.each(function(i, cluster) {
                var $cluster = $(cluster);
                var clusterNumber = $cluster.data('id');
                if (clusterNumber === row) {
                    var nodes = $cluster.find('.node');
                    //
                    nodes.each(function(j, node) {
                        var $node = $(node);
                        var nodeNumber = $node.data('id');
                        if (nodeNumber === col) {
                            result = $node;
                        }
                    });
                }
            });
            //
            return result;
        }

    });
 
}( jQuery ));
