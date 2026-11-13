var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AelanDigitalaelan_digital_1 = new ol.format.GeoJSON();
var features_AelanDigitalaelan_digital_1 = format_AelanDigitalaelan_digital_1.readFeatures(json_AelanDigitalaelan_digital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigitalaelan_digital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigitalaelan_digital_1.addFeatures(features_AelanDigitalaelan_digital_1);
var lyr_AelanDigitalaelan_digital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigitalaelan_digital_1, 
                style: style_AelanDigitalaelan_digital_1,
                popuplayertitle: 'Aelan Digital — aelan_digital',
                interactive: true,
                title: '<img src="styles/legend/AelanDigitalaelan_digital_1.png" /> Aelan Digital — aelan_digital'
            });
var format_ANZCentralTulagianz_centraltulagi__2 = new ol.format.GeoJSON();
var features_ANZCentralTulagianz_centraltulagi__2 = format_ANZCentralTulagianz_centraltulagi__2.readFeatures(json_ANZCentralTulagianz_centraltulagi__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZCentralTulagianz_centraltulagi__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZCentralTulagianz_centraltulagi__2.addFeatures(features_ANZCentralTulagianz_centraltulagi__2);
var lyr_ANZCentralTulagianz_centraltulagi__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZCentralTulagianz_centraltulagi__2, 
                style: style_ANZCentralTulagianz_centraltulagi__2,
                popuplayertitle: 'ANZ Central(Tulagi) — anz_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/ANZCentralTulagianz_centraltulagi__2.png" /> ANZ Central(Tulagi) — anz_centraltulagi_'
            });
var format_ANZGizoanz_gizo_3 = new ol.format.GeoJSON();
var features_ANZGizoanz_gizo_3 = format_ANZGizoanz_gizo_3.readFeatures(json_ANZGizoanz_gizo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZGizoanz_gizo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZGizoanz_gizo_3.addFeatures(features_ANZGizoanz_gizo_3);
var lyr_ANZGizoanz_gizo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZGizoanz_gizo_3, 
                style: style_ANZGizoanz_gizo_3,
                popuplayertitle: 'ANZ Gizo — anz_gizo',
                interactive: true,
                title: '<img src="styles/legend/ANZGizoanz_gizo_3.png" /> ANZ Gizo — anz_gizo'
            });
var format_ANZHoniaraanz_honiara__4 = new ol.format.GeoJSON();
var features_ANZHoniaraanz_honiara__4 = format_ANZHoniaraanz_honiara__4.readFeatures(json_ANZHoniaraanz_honiara__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniaraanz_honiara__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniaraanz_honiara__4.addFeatures(features_ANZHoniaraanz_honiara__4);
var lyr_ANZHoniaraanz_honiara__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniaraanz_honiara__4, 
                style: style_ANZHoniaraanz_honiara__4,
                popuplayertitle: 'ANZ Honiara — anz_honiara_',
                interactive: true,
                title: '<img src="styles/legend/ANZHoniaraanz_honiara__4.png" /> ANZ Honiara — anz_honiara_'
            });
var format_ANZHoniaraanz_honiara__5 = new ol.format.GeoJSON();
var features_ANZHoniaraanz_honiara__5 = format_ANZHoniaraanz_honiara__5.readFeatures(json_ANZHoniaraanz_honiara__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniaraanz_honiara__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniaraanz_honiara__5.addFeatures(features_ANZHoniaraanz_honiara__5);
var lyr_ANZHoniaraanz_honiara__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniaraanz_honiara__5, 
                style: style_ANZHoniaraanz_honiara__5,
                popuplayertitle: 'ANZ Honiara — anz_honiara_',
                interactive: true,
                title: '<img src="styles/legend/ANZHoniaraanz_honiara__5.png" /> ANZ Honiara — anz_honiara_'
            });
var format_ANZMundaanz_munda_6 = new ol.format.GeoJSON();
var features_ANZMundaanz_munda_6 = format_ANZMundaanz_munda_6.readFeatures(json_ANZMundaanz_munda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZMundaanz_munda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZMundaanz_munda_6.addFeatures(features_ANZMundaanz_munda_6);
var lyr_ANZMundaanz_munda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZMundaanz_munda_6, 
                style: style_ANZMundaanz_munda_6,
                popuplayertitle: 'ANZ Munda — anz_munda',
                interactive: true,
                title: '<img src="styles/legend/ANZMundaanz_munda_6.png" /> ANZ Munda — anz_munda'
            });
var format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7 = new ol.format.GeoJSON();
var features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7 = format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.readFeatures(json_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.addFeatures(features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7);
var lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7, 
                style: style_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7,
                popuplayertitle: 'Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.png" /> Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_'
            });
var format_BankofSouthPacificGizobank_of_south_pacific_gizo_8 = new ol.format.GeoJSON();
var features_BankofSouthPacificGizobank_of_south_pacific_gizo_8 = format_BankofSouthPacificGizobank_of_south_pacific_gizo_8.readFeatures(json_BankofSouthPacificGizobank_of_south_pacific_gizo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_8.addFeatures(features_BankofSouthPacificGizobank_of_south_pacific_gizo_8);
var lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_8, 
                style: style_BankofSouthPacificGizobank_of_south_pacific_gizo_8,
                popuplayertitle: 'Bank of South Pacific Gizo — bank_of_south_pacific_gizo',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificGizobank_of_south_pacific_gizo_8.png" /> Bank of South Pacific Gizo — bank_of_south_pacific_gizo'
            });
var format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9 = format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.readFeatures(json_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.addFeatures(features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9);
var lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9, 
                style: style_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9,
                popuplayertitle: 'Bank of South Pacific Honiara — bank_of_south_pacific_honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.png" /> Bank of South Pacific Honiara — bank_of_south_pacific_honiara'
            });
var format_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10 = new ol.format.GeoJSON();
var features_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10 = format_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.readFeatures(json_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.addFeatures(features_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10);
var lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10, 
                style: style_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10,
                popuplayertitle: 'Bank of South Pacific Malaita — bank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.png" /> Bank of South Pacific Malaita — bank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita'
            });
var format_BankofSouthPacificMundabank_of_south_pacific_munda_11 = new ol.format.GeoJSON();
var features_BankofSouthPacificMundabank_of_south_pacific_munda_11 = format_BankofSouthPacificMundabank_of_south_pacific_munda_11.readFeatures(json_BankofSouthPacificMundabank_of_south_pacific_munda_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_11.addFeatures(features_BankofSouthPacificMundabank_of_south_pacific_munda_11);
var lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_11, 
                style: style_BankofSouthPacificMundabank_of_south_pacific_munda_11,
                popuplayertitle: 'Bank of South Pacific Munda — bank_of_south_pacific_munda',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMundabank_of_south_pacific_munda_11.png" /> Bank of South Pacific Munda — bank_of_south_pacific_munda'
            });
var format_BankofSouthPacificMundabank_of_south_pacific_munda_12 = new ol.format.GeoJSON();
var features_BankofSouthPacificMundabank_of_south_pacific_munda_12 = format_BankofSouthPacificMundabank_of_south_pacific_munda_12.readFeatures(json_BankofSouthPacificMundabank_of_south_pacific_munda_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_12.addFeatures(features_BankofSouthPacificMundabank_of_south_pacific_munda_12);
var lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMundabank_of_south_pacific_munda_12, 
                style: style_BankofSouthPacificMundabank_of_south_pacific_munda_12,
                popuplayertitle: 'Bank of South Pacific Munda — bank_of_south_pacific_munda',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMundabank_of_south_pacific_munda_12.png" /> Bank of South Pacific Munda — bank_of_south_pacific_munda'
            });
var format_BredBankHoniarabredbank_honiara_13 = new ol.format.GeoJSON();
var features_BredBankHoniarabredbank_honiara_13 = format_BredBankHoniarabredbank_honiara_13.readFeatures(json_BredBankHoniarabredbank_honiara_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniarabredbank_honiara_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniarabredbank_honiara_13.addFeatures(features_BredBankHoniarabredbank_honiara_13);
var lyr_BredBankHoniarabredbank_honiara_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniarabredbank_honiara_13, 
                style: style_BredBankHoniarabredbank_honiara_13,
                popuplayertitle: 'BredBank Honiara — bredbank_honiara',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniarabredbank_honiara_13.png" /> BredBank Honiara — bredbank_honiara'
            });
var format_BSPCentralTulagibsp_centraltulagi_14 = new ol.format.GeoJSON();
var features_BSPCentralTulagibsp_centraltulagi_14 = format_BSPCentralTulagibsp_centraltulagi_14.readFeatures(json_BSPCentralTulagibsp_centraltulagi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BSPCentralTulagibsp_centraltulagi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BSPCentralTulagibsp_centraltulagi_14.addFeatures(features_BSPCentralTulagibsp_centraltulagi_14);
var lyr_BSPCentralTulagibsp_centraltulagi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BSPCentralTulagibsp_centraltulagi_14, 
                style: style_BSPCentralTulagibsp_centraltulagi_14,
                popuplayertitle: 'BSP Central(Tulagi) — bsp_centraltulagi',
                interactive: true,
                title: '<img src="styles/legend/BSPCentralTulagibsp_centraltulagi_14.png" /> BSP Central(Tulagi) — bsp_centraltulagi'
            });
var format_EziPeiGizoezi_pei_gizo_15 = new ol.format.GeoJSON();
var features_EziPeiGizoezi_pei_gizo_15 = format_EziPeiGizoezi_pei_gizo_15.readFeatures(json_EziPeiGizoezi_pei_gizo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiGizoezi_pei_gizo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiGizoezi_pei_gizo_15.addFeatures(features_EziPeiGizoezi_pei_gizo_15);
var lyr_EziPeiGizoezi_pei_gizo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiGizoezi_pei_gizo_15, 
                style: style_EziPeiGizoezi_pei_gizo_15,
                popuplayertitle: 'Ezi Pei Gizo — ezi_pei_gizo',
                interactive: true,
                title: '<img src="styles/legend/EziPeiGizoezi_pei_gizo_15.png" /> Ezi Pei Gizo — ezi_pei_gizo'
            });
var format_EziPeiMalaitaezi_pei_malaita_16 = new ol.format.GeoJSON();
var features_EziPeiMalaitaezi_pei_malaita_16 = format_EziPeiMalaitaezi_pei_malaita_16.readFeatures(json_EziPeiMalaitaezi_pei_malaita_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaitaezi_pei_malaita_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaitaezi_pei_malaita_16.addFeatures(features_EziPeiMalaitaezi_pei_malaita_16);
var lyr_EziPeiMalaitaezi_pei_malaita_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaitaezi_pei_malaita_16, 
                style: style_EziPeiMalaitaezi_pei_malaita_16,
                popuplayertitle: 'Ezi Pei Malaita — ezi_pei_malaita',
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaitaezi_pei_malaita_16.png" /> Ezi Pei Malaita — ezi_pei_malaita'
            });
var format_EzipeiPostCentralTulagiezipei_post_centraltulagi__17 = new ol.format.GeoJSON();
var features_EzipeiPostCentralTulagiezipei_post_centraltulagi__17 = format_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.readFeatures(json_EzipeiPostCentralTulagiezipei_post_centraltulagi__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.addFeatures(features_EzipeiPostCentralTulagiezipei_post_centraltulagi__17);
var lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__17, 
                style: style_EzipeiPostCentralTulagiezipei_post_centraltulagi__17,
                popuplayertitle: 'Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/EzipeiPostCentralTulagiezipei_post_centraltulagi__17.png" /> Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_'
            });
var format_MSelenCentralBigNgellabig_ngella__18 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__18 = format_MSelenCentralBigNgellabig_ngella__18.readFeatures(json_MSelenCentralBigNgellabig_ngella__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__18.addFeatures(features_MSelenCentralBigNgellabig_ngella__18);
var lyr_MSelenCentralBigNgellabig_ngella__18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__18, 
                style: style_MSelenCentralBigNgellabig_ngella__18,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__18.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });
var format_MSelenCentralSmallNgellasmall_ngella_19 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgellasmall_ngella_19 = format_MSelenCentralSmallNgellasmall_ngella_19.readFeatures(json_MSelenCentralSmallNgellasmall_ngella_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgellasmall_ngella_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgellasmall_ngella_19.addFeatures(features_MSelenCentralSmallNgellasmall_ngella_19);
var lyr_MSelenCentralSmallNgellasmall_ngella_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgellasmall_ngella_19, 
                style: style_MSelenCentralSmallNgellasmall_ngella_19,
                popuplayertitle: 'M - Selen Central(Small Ngella) — small_ngella',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgellasmall_ngella_19.png" /> M - Selen Central(Small Ngella) — small_ngella'
            });
var format_MSelenChoisuelmselen_choisuel__20 = new ol.format.GeoJSON();
var features_MSelenChoisuelmselen_choisuel__20 = format_MSelenChoisuelmselen_choisuel__20.readFeatures(json_MSelenChoisuelmselen_choisuel__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenChoisuelmselen_choisuel__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenChoisuelmselen_choisuel__20.addFeatures(features_MSelenChoisuelmselen_choisuel__20);
var lyr_MSelenChoisuelmselen_choisuel__20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenChoisuelmselen_choisuel__20, 
                style: style_MSelenChoisuelmselen_choisuel__20,
                popuplayertitle: 'M - Selen Choisuel — mselen_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/MSelenChoisuelmselen_choisuel__20.png" /> M - Selen Choisuel — mselen_choisuel_'
            });
var format_MSelenGizomselen_gizo_21 = new ol.format.GeoJSON();
var features_MSelenGizomselen_gizo_21 = format_MSelenGizomselen_gizo_21.readFeatures(json_MSelenGizomselen_gizo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizomselen_gizo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizomselen_gizo_21.addFeatures(features_MSelenGizomselen_gizo_21);
var lyr_MSelenGizomselen_gizo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizomselen_gizo_21, 
                style: style_MSelenGizomselen_gizo_21,
                popuplayertitle: 'M- Selen Gizo — mselen_gizo',
                interactive: true,
                title: '<img src="styles/legend/MSelenGizomselen_gizo_21.png" /> M- Selen Gizo — mselen_gizo'
            });
var format_EziPeiMalaitaezi_pei_malaita_22 = new ol.format.GeoJSON();
var features_EziPeiMalaitaezi_pei_malaita_22 = format_EziPeiMalaitaezi_pei_malaita_22.readFeatures(json_EziPeiMalaitaezi_pei_malaita_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaitaezi_pei_malaita_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaitaezi_pei_malaita_22.addFeatures(features_EziPeiMalaitaezi_pei_malaita_22);
var lyr_EziPeiMalaitaezi_pei_malaita_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaitaezi_pei_malaita_22, 
                style: style_EziPeiMalaitaezi_pei_malaita_22,
                popuplayertitle: 'Ezi Pei Malaita — ezi_pei_malaita',
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaitaezi_pei_malaita_22.png" /> Ezi Pei Malaita — ezi_pei_malaita'
            });
var format_MSelenMalaitamselen_malaita_23 = new ol.format.GeoJSON();
var features_MSelenMalaitamselen_malaita_23 = format_MSelenMalaitamselen_malaita_23.readFeatures(json_MSelenMalaitamselen_malaita_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMalaitamselen_malaita_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMalaitamselen_malaita_23.addFeatures(features_MSelenMalaitamselen_malaita_23);
var lyr_MSelenMalaitamselen_malaita_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMalaitamselen_malaita_23, 
                style: style_MSelenMalaitamselen_malaita_23,
                popuplayertitle: 'M- Selen Malaita — mselen_malaita',
                interactive: true,
                title: '<img src="styles/legend/MSelenMalaitamselen_malaita_23.png" /> M- Selen Malaita — mselen_malaita'
            });
var format_MSelenNoromselen_noro_24 = new ol.format.GeoJSON();
var features_MSelenNoromselen_noro_24 = format_MSelenNoromselen_noro_24.readFeatures(json_MSelenNoromselen_noro_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenNoromselen_noro_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenNoromselen_noro_24.addFeatures(features_MSelenNoromselen_noro_24);
var lyr_MSelenNoromselen_noro_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenNoromselen_noro_24, 
                style: style_MSelenNoromselen_noro_24,
                popuplayertitle: 'M- Selen Noro — mselen_noro',
                interactive: true,
                title: '<img src="styles/legend/MSelenNoromselen_noro_24.png" /> M- Selen Noro — mselen_noro'
            });
var format_MSelenRenbelrenbel_25 = new ol.format.GeoJSON();
var features_MSelenRenbelrenbel_25 = format_MSelenRenbelrenbel_25.readFeatures(json_MSelenRenbelrenbel_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenRenbelrenbel_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenRenbelrenbel_25.addFeatures(features_MSelenRenbelrenbel_25);
var lyr_MSelenRenbelrenbel_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenRenbelrenbel_25, 
                style: style_MSelenRenbelrenbel_25,
                popuplayertitle: 'M- Selen Renbel — renbel',
                interactive: true,
                title: '<img src="styles/legend/MSelenRenbelrenbel_25.png" /> M- Selen Renbel — renbel'
            });
var format_MSelenHoniaramselen_honiara_26 = new ol.format.GeoJSON();
var features_MSelenHoniaramselen_honiara_26 = format_MSelenHoniaramselen_honiara_26.readFeatures(json_MSelenHoniaramselen_honiara_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniaramselen_honiara_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniaramselen_honiara_26.addFeatures(features_MSelenHoniaramselen_honiara_26);
var lyr_MSelenHoniaramselen_honiara_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniaramselen_honiara_26, 
                style: style_MSelenHoniaramselen_honiara_26,
                popuplayertitle: 'M-Selen Honiara — mselen_honiara',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniaramselen_honiara_26.png" /> M-Selen Honiara — mselen_honiara'
            });
var format_MSelenMundamselen_munda_27 = new ol.format.GeoJSON();
var features_MSelenMundamselen_munda_27 = format_MSelenMundamselen_munda_27.readFeatures(json_MSelenMundamselen_munda_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMundamselen_munda_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMundamselen_munda_27.addFeatures(features_MSelenMundamselen_munda_27);
var lyr_MSelenMundamselen_munda_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMundamselen_munda_27, 
                style: style_MSelenMundamselen_munda_27,
                popuplayertitle: 'M-Selen Munda — mselen_munda',
                interactive: true,
                title: '<img src="styles/legend/MSelenMundamselen_munda_27.png" /> M-Selen Munda — mselen_munda'
            });
var format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28 = new ol.format.GeoJSON();
var features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28 = format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.readFeatures(json_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.addFeatures(features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28);
var lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28, 
                style: style_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28,
                popuplayertitle: 'Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.png" /> Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_AelanDigitalaelan_digital_1.setVisible(true);lyr_ANZCentralTulagianz_centraltulagi__2.setVisible(true);lyr_ANZGizoanz_gizo_3.setVisible(true);lyr_ANZHoniaraanz_honiara__4.setVisible(true);lyr_ANZHoniaraanz_honiara__5.setVisible(true);lyr_ANZMundaanz_munda_6.setVisible(true);lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.setVisible(true);lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8.setVisible(true);lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.setVisible(true);lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.setVisible(true);lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11.setVisible(true);lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12.setVisible(true);lyr_BredBankHoniarabredbank_honiara_13.setVisible(true);lyr_BSPCentralTulagibsp_centraltulagi_14.setVisible(true);lyr_EziPeiGizoezi_pei_gizo_15.setVisible(true);lyr_EziPeiMalaitaezi_pei_malaita_16.setVisible(true);lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__18.setVisible(true);lyr_MSelenCentralSmallNgellasmall_ngella_19.setVisible(true);lyr_MSelenChoisuelmselen_choisuel__20.setVisible(true);lyr_MSelenGizomselen_gizo_21.setVisible(true);lyr_EziPeiMalaitaezi_pei_malaita_22.setVisible(true);lyr_MSelenMalaitamselen_malaita_23.setVisible(true);lyr_MSelenNoromselen_noro_24.setVisible(true);lyr_MSelenRenbelrenbel_25.setVisible(true);lyr_MSelenHoniaramselen_honiara_26.setVisible(true);lyr_MSelenMundamselen_munda_27.setVisible(true);lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AelanDigitalaelan_digital_1,lyr_ANZCentralTulagianz_centraltulagi__2,lyr_ANZGizoanz_gizo_3,lyr_ANZHoniaraanz_honiara__4,lyr_ANZHoniaraanz_honiara__5,lyr_ANZMundaanz_munda_6,lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7,lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8,lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9,lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10,lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11,lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12,lyr_BredBankHoniarabredbank_honiara_13,lyr_BSPCentralTulagibsp_centraltulagi_14,lyr_EziPeiGizoezi_pei_gizo_15,lyr_EziPeiMalaitaezi_pei_malaita_16,lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17,lyr_MSelenCentralBigNgellabig_ngella__18,lyr_MSelenCentralSmallNgellasmall_ngella_19,lyr_MSelenChoisuelmselen_choisuel__20,lyr_MSelenGizomselen_gizo_21,lyr_EziPeiMalaitaezi_pei_malaita_22,lyr_MSelenMalaitamselen_malaita_23,lyr_MSelenNoromselen_noro_24,lyr_MSelenRenbelrenbel_25,lyr_MSelenHoniaramselen_honiara_26,lyr_MSelenMundamselen_munda_27,lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28];
lyr_AelanDigitalaelan_digital_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZGizoanz_gizo_3.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZHoniaraanz_honiara__4.set('fieldAliases', {'fid': 'fid', 'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZHoniaraanz_honiara__5.set('fieldAliases', {'fid': 'fid', 'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZMundaanz_munda_6.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniarabredbank_honiara_13.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BSPCentralTulagibsp_centraltulagi_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiGizoezi_pei_gizo_15.set('fieldAliases', {'fid': 'fid', 'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaitaezi_pei_malaita_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralBigNgellabig_ngella__18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgellasmall_ngella_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenChoisuelmselen_choisuel__20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizomselen_gizo_21.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaitaezi_pei_malaita_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMalaitamselen_malaita_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenNoromselen_noro_24.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenRenbelrenbel_25.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenHoniaramselen_honiara_26.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMundamselen_munda_27.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AelanDigitalaelan_digital_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZGizoanz_gizo_3.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZHoniaraanz_honiara__4.set('fieldImages', {'fid': 'TextEdit', 'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZHoniaraanz_honiara__5.set('fieldImages', {'fid': '', 'ANZ   BRANCHES': '', 'TYPE OF BRANCHE': '', 'STREET ADDRESS & CITY': '', 'Latitude': '', 'Longitude': '', });
lyr_ANZMundaanz_munda_6.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.set('fieldImages', {'fid': '', 'NAME': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8.set('fieldImages', {'fid': '', 'BSP BRANCHES': '', 'STREET ADDRESS & CITY': '', 'Latitude': '', 'Longitude': '', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11.set('fieldImages', {'fid': '', 'BSP BRANCHES': '', 'STREET ADDRESS & CITY': '', 'field_3': '', 'Latitude': '', 'Longitude': '', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBankHoniarabredbank_honiara_13.set('fieldImages', {'fid': 'TextEdit', 'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BSPCentralTulagibsp_centraltulagi_14.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_EziPeiGizoezi_pei_gizo_15.set('fieldImages', {'fid': 'TextEdit', 'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaitaezi_pei_malaita_16.set('fieldImages', {'fid': '', 'Name': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralBigNgellabig_ngella__18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralSmallNgellasmall_ngella_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenChoisuelmselen_choisuel__20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenGizomselen_gizo_21.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaitaezi_pei_malaita_22.set('fieldImages', {'fid': '', 'Name': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenMalaitamselen_malaita_23.set('fieldImages', {'fid': '', 'Name': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenNoromselen_noro_24.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenRenbelrenbel_25.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenHoniaramselen_honiara_26.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Busi': 'TextEdit', 'Physical A': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMundamselen_munda_27.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_AelanDigitalaelan_digital_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZGizoanz_gizo_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZHoniaraanz_honiara__4.set('fieldLabels', {'fid': 'inline label - always visible', 'ANZ   BRANCHES': 'inline label - visible with data', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZHoniaraanz_honiara__5.set('fieldLabels', {'fid': 'no label', 'ANZ   BRANCHES': 'no label', 'TYPE OF BRANCHE': 'no label', 'STREET ADDRESS & CITY': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ANZMundaanz_munda_6.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__7.set('fieldLabels', {'fid': 'inline label - visible with data', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_8.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_9.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificMalaitabank_of_south_pacific_malaita___bank_of_south_pacific__malaita__bank_of_south_pacific_malaita_10.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_11.set('fieldLabels', {'fid': 'no label', 'BSP BRANCHES': 'no label', 'STREET ADDRESS & CITY': 'no label', 'field_3': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_BankofSouthPacificMundabank_of_south_pacific_munda_12.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniarabredbank_honiara_13.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BSPCentralTulagibsp_centraltulagi_14.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiGizoezi_pei_gizo_15.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaitaezi_pei_malaita_16.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__17.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__18.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralSmallNgellasmall_ngella_19.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenChoisuelmselen_choisuel__20.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - visible with data', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenGizomselen_gizo_21.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaitaezi_pei_malaita_22.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Access type': 'no label', 'Location': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_MSelenMalaitamselen_malaita_23.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenNoromselen_noro_24.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenRenbelrenbel_25.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniaramselen_honiara_26.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMundamselen_munda_27.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});