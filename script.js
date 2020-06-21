onReady(function () 
{
    let dataY = [];
    let dataX = [];
    let a = 5;
    let b = 1;
    let c = 4;
    for (let x = -5; x <= 5; x+= 0.03125) 
    {
      dataX.push(x);
      let func = Math.sin(a*x) + b*Math.cos(c*x);
      dataY.push(func);
    }

    var data21 = 
    {
      "y": 
      {
        "data": [dataY],
        "smps": dataX,
        "vars": ["Wartość y"]
      }
    };

    var config21 = 
    {
      "colorScheme": "GGPlot",
      "graphOrientation": "vertical",
      "graphType": "Line",
      "lineType": "line",
      "objectBorderColor": "false",
      "showLegend": false,
      "showSampleNames": "true",
      "showTransition": "false",
      "smpLabelRotate": 45,
      "yAxis":[5,4],
      "smpLabelFontSize": 4,
      "yAxisTitle" : "Survival (days)",
      "Title": "Zadanie 2.1",
      "smpLabelInterval": 45
    };

    new CanvasXpress("canvas21", data21, config21);

    let result = [];
    for (let z = 1; z <= 2; z += 0.01) 
    {
      for (let x = -10; x <= 10; x++) 
      {
        let y = x * x / 4000 - Math.cos(x / Math.sqrt(z)) + 1;
        result.push([x, y, z, 1]);
      }
    }

    var data22 = 
    {
      "y": 
      {
        "data": result,
        "smps": ["X", "Y", "Z"],
      }
    };

    var config22 = 
    {
        "graphType": "Scatter3D",
        "renderTo": "scatter3d2",
        "showConfidenceIntervals": "true",
        "theme": "tableau",
        "title": "Zadanie 2.2",
        "xAxis": ["X"],
        "xAxisExact": "true",
        "yAxis": ["Y"],
        "yAxisExact": "true",
        "zAxis": ["Z"],
        "zAxisExact": "true",
        "colorBy": "x",
        "ellipseBy": "xAxis",
    };

    
    fetch("dane.json").then(response=>response.json()).then(json => 
    {
        new CanvasXpress("canvas22", json, config22);
    });   

    var config23 = 
    {
    "graphType": "Scatter3D",
    "renderTo": "scatter3d2",
    "showConfidenceIntervals": "true",
    "theme": "Econimist",
    "title": "Zadanie 2.3",
    "xAxis": ["X"],
    "xAxisExact": "true",
    "yAxis": ["Y"],
    "yAxisExact": "true",
    "zAxis": ["Z"],
    "zAxisExact": "true",
    "colorBy": "x",
    "ellipseBy": "xAxis",
    };

    new CanvasXpress("canvas23", data23, config23);

    let irisDataSet = 
    {
      "y": 
      {
        "vars": ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35", "s36", "s37", "s38", "s39", "s40", "s41", "s42", "s43", "s44", "s45", "s46", "s47", "s48", "s49", "s50", "s51", "s52", "s53", "s54", "s55", "s56", "s57", "s58", "s59", "s60", "s61", "s62", "s63", "s64", "s65", "s66", "s67", "s68", "s69", "s70", "s71", "s72", "s73", "s74", "s75", "s76", "s77", "s78", "s79", "s80", "s81", "s82", "s83", "s84", "s85", "s86", "s87", "s88", "s89", "s90", "s91", "s92", "s93", "s94", "s95", "s96", "s97", "s98", "s99", "s100", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108", "s109", "s110", "s111", "s112", "s113", "s114", "s115", "s116", "s117", "s118", "s119", "s120", "s121", "s122", "s123", "s124", "s125", "s126", "s127", "s128", "s129", "s130", "s131", "s132", "s133", "s134", "s135", "s136", "s137", "s138", "s139", "s140", "s141", "s142", "s143", "s144", "s145", "s146", "s147", "s148", "s149", "s150"],
        "smps": ["Sepal.Length", "Sepal.Width", "Petal.Length", "Petal.Width"],
        "data": 
        [
          [5.1, 3.5, 1.4, 0.2], [4.9, 3, 1.4, 0.2], [4.7, 3.2, 1.3, 0.2], [4.6, 3.1, 1.5, 0.2],
          [5, 3.6, 1.4, 0.2], [5.4, 3.9, 1.7, 0.4], [4.6, 3.4, 1.4, 0.3], [5, 3.4, 1.5, 0.2],
          [4.4, 2.9, 1.4, 0.2], [4.9, 3.1, 1.5, 0.1], [5.4, 3.7, 1.5, 0.2], [4.8, 3.4, 1.6, 0.2],
          [4.8, 3, 1.4, 0.1], [4.3, 3, 1.1, 0.1], [5.8, 4, 1.2, 0.2], [5.7, 4.4, 1.5, 0.4],
          [5.4, 3.9, 1.3, 0.4], [5.1, 3.5, 1.4, 0.3], [5.7, 3.8, 1.7, 0.3], [5.1, 3.8, 1.5, 0.3],
          [5.4, 3.4, 1.7, 0.2], [5.1, 3.7, 1.5, 0.4], [4.6, 3.6, 1, 0.2], [5.1, 3.3, 1.7, 0.5],
          [4.8, 3.4, 1.9, 0.2], [5, 3, 1.6, 0.2], [5, 3.4, 1.6, 0.4], [5.2, 3.5, 1.5, 0.2],
          [5.2, 3.4, 1.4, 0.2], [4.7, 3.2, 1.6, 0.2], [4.8, 3.1, 1.6, 0.2], [5.4, 3.4, 1.5, 0.4],
          [5.2, 4.1, 1.5, 0.1], [5.5, 4.2, 1.4, 0.2], [4.9, 3.1, 1.5, 0.2], [5, 3.2, 1.2, 0.2],
          [5.5, 3.5, 1.3, 0.2], [4.9, 3.6, 1.4, 0.1], [4.4, 3, 1.3, 0.2], [5.1, 3.4, 1.5, 0.2],
          [5, 3.5, 1.3, 0.3], [4.5, 2.3, 1.3, 0.3], [4.4, 3.2, 1.3, 0.2], [5, 3.5, 1.6, 0.6],
          [5.1, 3.8, 1.9, 0.4], [4.8, 3, 1.4, 0.3], [5.1, 3.8, 1.6, 0.2], [4.6, 3.2, 1.4, 0.2],
          [5.3, 3.7, 1.5, 0.2], [5, 3.3, 1.4, 0.2], [7, 3.2, 4.7, 1.4], [6.4, 3.2, 4.5, 1.5],
          [6.9, 3.1, 4.9, 1.5], [5.5, 2.3, 4, 1.3], [6.5, 2.8, 4.6, 1.5], [5.7, 2.8, 4.5, 1.3],
          [6.3, 3.3, 4.7, 1.6], [4.9, 2.4, 3.3, 1], [6.6, 2.9, 4.6, 1.3], [5.2, 2.7, 3.9, 1.4],
          [5, 2, 3.5, 1], [5.9, 3, 4.2, 1.5], [6, 2.2, 4, 1], [6.1, 2.9, 4.7, 1.4],
          [5.6, 2.9, 3.6, 1.3], [6.7, 3.1, 4.4, 1.4], [5.6, 3, 4.5, 1.5], [5.8, 2.7, 4.1, 1],
          [6.2, 2.2, 4.5, 1.5], [5.6, 2.5, 3.9, 1.1], [5.9, 3.2, 4.8, 1.8], [6.1, 2.8, 4, 1.3],
          [6.3, 2.5, 4.9, 1.5], [6.1, 2.8, 4.7, 1.2], [6.4, 2.9, 4.3, 1.3], [6.6, 3, 4.4, 1.4],
          [6.8, 2.8, 4.8, 1.4], [6.7, 3, 5, 1.7], [6, 2.9, 4.5, 1.5], [5.7, 2.6, 3.5, 1],
          [5.5, 2.4, 3.8, 1.1], [5.5, 2.4, 3.7, 1], [5.8, 2.7, 3.9, 1.2], [6, 2.7, 5.1, 1.6],
          [5.4, 3, 4.5, 1.5], [6, 3.4, 4.5, 1.6], [6.7, 3.1, 4.7, 1.5], [6.3, 2.3, 4.4, 1.3],
          [5.6, 3, 4.1, 1.3], [5.5, 2.5, 4, 1.3], [5.5, 2.6, 4.4, 1.2], [6.1, 3, 4.6, 1.4],
          [5.8, 2.6, 4, 1.2], [5, 2.3, 3.3, 1], [5.6, 2.7, 4.2, 1.3], [5.7, 3, 4.2, 1.2],
          [5.7, 2.9, 4.2, 1.3], [6.2, 2.9, 4.3, 1.3], [5.1, 2.5, 3, 1.1], [5.7, 2.8, 4.1, 1.3],
          [6.3, 3.3, 6, 2.5], [5.8, 2.7, 5.1, 1.9], [7.1, 3, 5.9, 2.1], [6.3, 2.9, 5.6, 1.8],
          [6.5, 3, 5.8, 2.2], [7.6, 3, 6.6, 2.1], [4.9, 2.5, 4.5, 1.7], [7.3, 2.9, 6.3, 1.8],
          [6.7, 2.5, 5.8, 1.8], [7.2, 3.6, 6.1, 2.5], [6.5, 3.2, 5.1, 2], [6.4, 2.7, 5.3, 1.9],
          [6.8, 3, 5.5, 2.1], [5.7, 2.5, 5, 2], [5.8, 2.8, 5.1, 2.4], [6.4, 3.2, 5.3, 2.3],
          [6.5, 3, 5.5, 1.8], [7.7, 3.8, 6.7, 2.2], [7.7, 2.6, 6.9, 2.3], [6, 2.2, 5, 1.5],
          [6.9, 3.2, 5.7, 2.3], [5.6, 2.8, 4.9, 2], [7.7, 2.8, 6.7, 2], [6.3, 2.7, 4.9, 1.8],
          [6.7, 3.3, 5.7, 2.1], [7.2, 3.2, 6, 1.8], [6.2, 2.8, 4.8, 1.8], [6.1, 3, 4.9, 1.8],
          [6.4, 2.8, 5.6, 2.1], [7.2, 3, 5.8, 1.6], [7.4, 2.8, 6.1, 1.9], [7.9, 3.8, 6.4, 2],
          [6.4, 2.8, 5.6, 2.2], [6.3, 2.8, 5.1, 1.5], [6.1, 2.6, 5.6, 1.4], [7.7, 3, 6.1, 2.3],
          [6.3, 3.4, 5.6, 2.4], [6.4, 3.1, 5.5, 1.8], [6, 3, 4.8, 1.8], [6.9, 3.1, 5.4, 2.1],
          [6.7, 3.1, 5.6, 2.4], [6.9, 3.1, 5.1, 2.3], [5.8, 2.7, 5.1, 1.9], [6.8, 3.2, 5.9, 2.3],
          [6.7, 3.3, 5.7, 2.5], [6.7, 3, 5.2, 2.3], [6.3, 2.5, 5, 1.9], [6.5, 3, 5.2, 2],
          [6.2, 3.4, 5.4, 2.3], [5.9, 3, 5.1, 1.8]
        ]
      },
      "z": {
        "Species": ["setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica"]
      }
    };

    let config3 = {
      "axisTickScaleFontFactor": 0.5,
      "axisTitleScaleFontFactor": 0.5,
      "colorBy": "Species",
      "decorationFontSize": 20,
      "graphType": "Scatter3D",
      "showScatterPlotMatrixLabels": true,
      "theme": "GGPlot",
      "title": "Zadanie 3",
      "transitionStep": 30,
      "xAxis": ["Sepal.Length"],
      "xAxisTicks": 10,
      "xAxisTitle": "Sepal.Length",
      "yAxis": ["Sepal.Width"],
      "yAxisTicks": 10,
      "yAxisTitle": "Sepal.Width",
      "zAxis": ["Petal.Length"],
      "zAxisTitle": "Petal.Length"
    };

    new CanvasXpress("canvas3", irisDataSet, config3, false);
});