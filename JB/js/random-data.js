function getRandomData(ordinal = false) {

    const NGROUPS = 1,
        MAXLINES = 15,
        MAXSEGMENTS = 20,
        MAXCATEGORIES = 4,
        //MINTIME = new Date(2013,2,21)
        MIN_X = 0,
        MAX_X = 72;

    const nCategories = MAXCATEGORIES,
        categoryLabels = ['Targaryen','Lannister','Baratheon','Stark'];

    return [...Array(NGROUPS).keys()].map(i => ({
        group: 'group' + (i+1),
        data: getGroupData()
    }));

    //

    function getGroupData() {

        return [...Array(MAXLINES).keys()].map(i => ({
            label: 'label' + (i+1),
            data: getSegmentsData()
        }));

        //

        function getSegmentsData() {
            const nSegments = MAXSEGMENTS,
                //segMaxLength = Math.round(((new Date())-MINTIME)/nSegments);
                segMaxLength = Math.round((1-MINTIME)/nSegments);
            let runLength = MINTIME;

            return [...Array(nSegments).keys()].map(i => {
                const tDivide = [Math.random(), Math.random()].sort(),
                    start = runLength + tDivide[0]*segMaxLength,
                    //start = new Date(runLength.getTime() + tDivide[0]*segMaxLength),
                    end = runLength + tDivide[1]*segMaxLength;
                    //end = new Date(runLength.getTime() + tDivide[1]*segMaxLength);

            runLength = runLength + segMaxLength;
            //runLength = new Date(runLength.getTime() + segMaxLength);

                //timeRange = [start, end];
                //valu = categoryLabels[Math.ceil(Math.random()*nCategories)];
                
                //console.log(timeRange);
                //console.log(valu);
                return {
                    timeRange: [start, end],
                    val: categoryLabels[Math.floor(Math.random()*nCategories)]
                    //labelVal: is optional - only displayed in the labels
                };
            });

        }
    }
}