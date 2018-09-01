var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_TIRAPREDIALWGS84_0 = new ol.format.GeoJSON();
var features_TIRAPREDIALWGS84_0 = format_TIRAPREDIALWGS84_0.readFeatures(json_TIRAPREDIALWGS84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIRAPREDIALWGS84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TIRAPREDIALWGS84_0.addFeatures(features_TIRAPREDIALWGS84_0);var lyr_TIRAPREDIALWGS84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIRAPREDIALWGS84_0, 
                style: style_TIRAPREDIALWGS84_0,
                title: '<img src="styles/legend/TIRAPREDIALWGS84_0.png" /> TIRA PREDIAL WGS84'
            });

lyr_TIRAPREDIALWGS84_0.setVisible(true);
var layersList = [baseLayer,lyr_TIRAPREDIALWGS84_0];
lyr_TIRAPREDIALWGS84_0.set('fieldAliases', {'FICHA': 'FICHA', 'UND_FUNC': 'UND_FUNC', 'COD_CATAS': 'COD_CATAS', 'MUNICIPIO': 'MUNICIPIO', 'MAT_INM': 'MAT_INM', 'PROPIETARI': 'PROPIETARI', 'ID_PROP': 'ID_PROP', 'DIRECCIÃ“N': 'DIRECCIÃ“N', 'TENENCIA': 'TENENCIA', 'PROP_PRIVA': 'PROP_PRIVA', 'FUNCION_PR': 'FUNCION_PR', 'ESTADO_PRE': 'ESTADO_PRE', 'LADO': 'LADO', 'ABS_INICIA': 'ABS_INICIA', 'ABS_FINAL': 'ABS_FINAL', 'LONG_VÃA_': 'LONG_VÃA_', 'LONG_EFEC': 'LONG_EFEC', 'AREA_REQ_m': 'AREA_REQ_m', 'AREA_CONS_': 'AREA_CONS_', 'MEJORAS': 'MEJORAS', 'AREA_TOTAL': 'AREA_TOTAL', 'AREA_SOB_m': 'AREA_SOB_m', 'CULTIVOS_E': 'CULTIVOS_E', 'VLR_UNIT_M': 'VLR_UNIT_M', 'VLR_TERR_R': 'VLR_TERR_R', 'VLR_CONS': 'VLR_CONS', 'VLR_CULT_E': 'VLR_CULT_E', 'VLR_MEJORA': 'VLR_MEJORA', 'VLR_TOTAL_': 'VLR_TOTAL_', 'OBSERVACIO': 'OBSERVACIO', 'PRIORITARI': 'PRIORITARI', 'LIST_CLINT': 'LIST_CLINT', 'REMANENTE': 'REMANENTE', 'ESTADO': 'ESTADO', 'CASO_ESP_1': 'CASO_ESP_1', 'VENC_AVAL': 'VENC_AVAL', 'JOIN': 'JOIN', 'PRIORI_VI': 'PRIORI_VI', });
lyr_TIRAPREDIALWGS84_0.set('fieldImages', {'FICHA': 'TextEdit', 'UND_FUNC': 'TextEdit', 'COD_CATAS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MAT_INM': 'TextEdit', 'PROPIETARI': 'TextEdit', 'ID_PROP': 'TextEdit', 'DIRECCIÃ“N': 'TextEdit', 'TENENCIA': 'TextEdit', 'PROP_PRIVA': 'TextEdit', 'FUNCION_PR': 'TextEdit', 'ESTADO_PRE': 'TextEdit', 'LADO': 'TextEdit', 'ABS_INICIA': 'TextEdit', 'ABS_FINAL': 'TextEdit', 'LONG_VÃA_': 'TextEdit', 'LONG_EFEC': 'TextEdit', 'AREA_REQ_m': 'TextEdit', 'AREA_CONS_': 'TextEdit', 'MEJORAS': 'TextEdit', 'AREA_TOTAL': 'TextEdit', 'AREA_SOB_m': 'TextEdit', 'CULTIVOS_E': 'TextEdit', 'VLR_UNIT_M': 'TextEdit', 'VLR_TERR_R': 'TextEdit', 'VLR_CONS': 'TextEdit', 'VLR_CULT_E': 'TextEdit', 'VLR_MEJORA': 'TextEdit', 'VLR_TOTAL_': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'PRIORITARI': 'TextEdit', 'LIST_CLINT': 'TextEdit', 'REMANENTE': 'TextEdit', 'ESTADO': 'TextEdit', 'CASO_ESP_1': 'TextEdit', 'VENC_AVAL': 'TextEdit', 'JOIN': 'TextEdit', 'PRIORI_VI': 'TextEdit', });
lyr_TIRAPREDIALWGS84_0.set('fieldLabels', {'FICHA': 'header label', 'UND_FUNC': 'no label', 'COD_CATAS': 'no label', 'MUNICIPIO': 'no label', 'MAT_INM': 'no label', 'PROPIETARI': 'no label', 'ID_PROP': 'no label', 'DIRECCIÃ“N': 'no label', 'TENENCIA': 'no label', 'PROP_PRIVA': 'no label', 'FUNCION_PR': 'no label', 'ESTADO_PRE': 'no label', 'LADO': 'no label', 'ABS_INICIA': 'no label', 'ABS_FINAL': 'no label', 'LONG_VÃA_': 'no label', 'LONG_EFEC': 'no label', 'AREA_REQ_m': 'no label', 'AREA_CONS_': 'no label', 'MEJORAS': 'no label', 'AREA_TOTAL': 'no label', 'AREA_SOB_m': 'no label', 'CULTIVOS_E': 'no label', 'VLR_UNIT_M': 'no label', 'VLR_TERR_R': 'no label', 'VLR_CONS': 'no label', 'VLR_CULT_E': 'no label', 'VLR_MEJORA': 'no label', 'VLR_TOTAL_': 'no label', 'OBSERVACIO': 'no label', 'PRIORITARI': 'no label', 'LIST_CLINT': 'no label', 'REMANENTE': 'no label', 'ESTADO': 'no label', 'CASO_ESP_1': 'no label', 'VENC_AVAL': 'no label', 'JOIN': 'no label', 'PRIORI_VI': 'no label', });
lyr_TIRAPREDIALWGS84_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});