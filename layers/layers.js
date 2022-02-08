var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_thermalpowerplants_1 = new ol.format.GeoJSON();
var features_thermalpowerplants_1 = format_thermalpowerplants_1.readFeatures(json_thermalpowerplants_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thermalpowerplants_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thermalpowerplants_1.addFeatures(features_thermalpowerplants_1);
var lyr_thermalpowerplants_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_thermalpowerplants_1, 
                style: style_thermalpowerplants_1,
                interactive: true,
                title: '<img src="styles/legend/thermalpowerplants_1.png" /> thermalpowerplants'
            });

lyr_OSMStandard_0.setVisible(true);lyr_thermalpowerplants_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_thermalpowerplants_1];
lyr_thermalpowerplants_1.set('fieldAliases', {'S.No': 'S.No', 'Name': 'Name', 'Capacity (MW)': 'Capacity (MW)', 'Location': 'Location', 'Operator': 'Operator', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_thermalpowerplants_1.set('fieldImages', {'S.No': 'Range', 'Name': 'TextEdit', 'Capacity (MW)': 'Range', 'Location': 'TextEdit', 'Operator': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_thermalpowerplants_1.set('fieldLabels', {'S.No': 'no label', 'Name': 'no label', 'Capacity (MW)': 'no label', 'Location': 'no label', 'Operator': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_thermalpowerplants_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});