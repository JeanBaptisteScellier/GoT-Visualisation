function genRandomData() {
    const NLINES = 25,
      MAXSEGMENTS = 10,
      MIN_X = 0,
      MAX_X = 72;
    return [{
      group: '',
      data: [...Array(NLINES).keys()].map(i => ({
        label: `line${i+1}`,
        data: getSegmentsData()
      }))
    }];
    //
    function getSegmentsData() {
      const nSegments = Math.ceil(Math.random()*MAXSEGMENTS),
        segMaxLength = Math.round((MAX_X-MIN_X)/nSegments);
      let runLength = MIN_X;
      return [...Array(nSegments).keys()].map(i => {
        const tDivide = [Math.random(), Math.random()].sort(),
          start = runLength + tDivide[0]*segMaxLength,
          end = runLength + tDivide[1]*segMaxLength;
        runLength = runLength + segMaxLength;
        return {
          timeRange: [start, end],
          val: Math.random()
        };
      });
    }
  }