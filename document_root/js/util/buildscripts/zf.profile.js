dependencies = {
    action:"release",
    optimize:"shrinksafe",
    layerOptimize:"shrinksafe",
    copyTests:false,
    loader:"default",
    cssOptimize:"comments",
    version:"zf-1.11.6",
    releaseName:"zf-1.11.6",
    layers:[
        {
            name:"../zf/main.js",
            layerDependencies:[],
            dependencies:["zf.main"]
        }
    ],
    prefixes:[
        ["dijit", "../dijit"],
        ["dojox", "../dojox"],
        ["zf","../zf"]
    ]
};
