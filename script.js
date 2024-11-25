TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_hq.jpeg",
       "width": 6720,
       "class": "ImageResourceLevel",
       "height": 3360
      },
      {
       "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -11,
        "image": {
         "colCount": 4,
         "frameCount": 24,
         "levels": [
          {
           "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_0_HS_0_0.png",
           "width": 400,
           "class": "ImageResourceLevel",
           "height": 360
          }
         ],
         "frameDuration": 33,
         "rowCount": 6,
         "class": "AnimatedImageResource"
        },
        "hfov": 22.23,
        "yaw": -60.85,
        "distance": 100,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_6B171B70_6687_8005_418B_F4B5FDBAA760",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE, this.camera_73397EB9_634E_CD68_41D2_4D871217F508); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": []
     }
    ]
   }
  ],
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "yaw": -60.85,
    "panorama": {
     "thumbnailUrl": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_hq.jpeg",
          "width": 6720,
          "class": "ImageResourceLevel",
          "height": 3360
         },
         {
          "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -8.25,
           "image": {
            "colCount": 4,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_0_0.png",
              "width": 400,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ],
            "frameDuration": 33,
            "rowCount": 6,
            "class": "AnimatedImageResource"
           },
           "hfov": 22.42,
           "yaw": -65.99,
           "distance": 100,
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_68DDC552_668A_800A_41C7_992CEA5C59FD",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C, this.camera_73135EA5_634E_CD18_41CA_6DEC3295D4F4); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": []
        },
        {
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -17.52,
           "image": {
            "colCount": 4,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_2_0.png",
              "width": 400,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ],
            "frameDuration": 33,
            "rowCount": 6,
            "class": "AnimatedImageResource"
           },
           "hfov": 21.6,
           "yaw": 111.43,
           "distance": 100,
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_8209E736_8F23_68E8_41D6_531D8B8F86ED",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134, this.camera_731EEE9D_634E_CD28_41D3_3F50DA54F64A); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": []
        },
        {
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 2.95,
           "image": {
            "levels": [
             {
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_3_0.png",
              "width": 209,
              "class": "ImageResourceLevel",
              "height": 182
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 11.2,
           "yaw": -104.05,
           "distance": 100,
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_CDAA0C95_D9B9_488C_41EA_1766A49A7596",
         "areas": [
          {
           "mapColor": "image",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "   \u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u043f\u0430\u043d\u0434\u0443\u0441"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": []
        }
       ]
      }
     ],
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "yaw": 111.43,
       "panorama": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
       "distance": 1,
       "backwardYaw": -60.85,
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -65.99,
       "panorama": {
        "thumbnailUrl": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_t.jpg",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_hq.jpeg",
             "width": 6720,
             "class": "ImageResourceLevel",
             "height": 3360
            },
            {
             "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -17.45,
              "image": {
               "colCount": 4,
               "frameCount": 24,
               "levels": [
                {
                 "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_0_HS_0_0.png",
                 "width": 400,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ],
               "frameDuration": 33,
               "rowCount": 6,
               "class": "AnimatedImageResource"
              },
              "hfov": 28.94,
              "yaw": -52.54,
              "distance": 100,
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_686EEDAE_668B_801B_41D6_090BA3D565E6",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_73FACEE9_634E_CAE8_418A_F52009E8BF7D); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": []
           },
           {
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -22.26,
              "image": {
               "colCount": 4,
               "frameCount": 24,
               "levels": [
                {
                 "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_0_HS_1_0.png",
                 "width": 400,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ],
               "frameDuration": 33,
               "rowCount": 6,
               "class": "AnimatedImageResource"
              },
              "hfov": 28.08,
              "yaw": 108.76,
              "distance": 100,
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_81016A30_8F21_18E8_41D2_2E020E3EA655",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE, this.camera_73C0CEE2_634E_CD18_41CE_4F0A6448474C); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": []
           }
          ]
         }
        ],
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "yaw": 108.76,
          "panorama": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
          "distance": 1,
          "backwardYaw": -65.99,
          "class": "AdjacentPanorama"
         },
         {
          "yaw": -52.54,
          "panorama": {
           "thumbnailUrl": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_t.jpg",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_hq.jpeg",
                "width": 6720,
                "class": "ImageResourceLevel",
                "height": 3360
               },
               {
                "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -9.97,
                 "image": {
                  "colCount": 4,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_0_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "frameDuration": 33,
                  "rowCount": 6,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 22.31,
                 "yaw": 173.2,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_69C4F972_668A_8005_41D3_938CE9D4E60C",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13, this.camera_7321BECE_634E_CD28_41CF_C2A93BB27899); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": []
              },
              {
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -14.36,
                 "image": {
                  "colCount": 4,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_2_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "frameDuration": 33,
                  "rowCount": 6,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 26.46,
                 "yaw": 77.13,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_82F8F7F0_8F21_1769_41CA_DCFE5D5DF65C",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C, this.camera_73D55EDC_634E_CD28_4193_DDFBE19E093C); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": []
              },
              {
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -8.6,
                 "image": {
                  "colCount": 4,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_3_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "frameDuration": 33,
                  "rowCount": 6,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 22.4,
                 "yaw": 155.7,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_9742E028_8FE1_68F9_41C1_3A74A3599E37",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C7306CE_568A_8318_41AE_148542B578B5, this.camera_73D9DED5_634E_CD38_41B3_BBE54D00AE42); this.mainPlayList.set('selectedIndex', 17)",
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": []
              }
             ]
            }
           ],
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "yaw": 173.2,
             "panorama": {
              "thumbnailUrl": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_t.jpg",
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_hq.jpeg",
                   "width": 6720,
                   "class": "ImageResourceLevel",
                   "height": 3360
                  },
                  {
                   "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "data": {
                   "label": "12"
                  },
                  "items": [
                   {
                    "pitch": -0.33,
                    "image": {
                     "colCount": 4,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_0_HS_0_0.png",
                       "width": 800,
                       "class": "ImageResourceLevel",
                       "height": 1200
                      }
                     ],
                     "frameDuration": 33,
                     "rowCount": 6,
                     "class": "AnimatedImageResource"
                    },
                    "hfov": 20.51,
                    "yaw": -152.5,
                    "distance": 100,
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_69E37B44_668A_800E_41BA_5E26BD653AC2",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": []
                 },
                 {
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -18.29,
                    "image": {
                     "colCount": 4,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_0_HS_1_0.png",
                       "width": 400,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ],
                     "frameDuration": 33,
                     "rowCount": 6,
                     "class": "AnimatedImageResource"
                    },
                    "hfov": 22.03,
                    "yaw": 14.59,
                    "distance": 100,
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_82C4AC33_8F21_38E8_41CD_8581536EE391",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_73E12EF7_634E_CAF8_41D4_C604A6F0C5C4); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": []
                 }
                ]
               }
              ],
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "thumbnailUrl": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_t.jpg",
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_hq.jpeg",
                      "width": 6720,
                      "class": "ImageResourceLevel",
                      "height": 3360
                     },
                     {
                      "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -15.12,
                       "image": {
                        "colCount": 4,
                        "frameCount": 24,
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_0_0.png",
                          "width": 400,
                          "class": "ImageResourceLevel",
                          "height": 360
                         }
                        ],
                        "frameDuration": 33,
                        "rowCount": 6,
                        "class": "AnimatedImageResource"
                       },
                       "hfov": 21.87,
                       "yaw": 28.38,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_760B0FFC_668A_FFFD_41D0_61150A2962E6",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068, this.camera_72501F20_634E_CB18_41B1_EDB14E6034F3); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": []
                    },
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "items": [
                      {
                       "pitch": 31.24,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_6_0.png",
                          "width": 1056,
                          "class": "ImageResourceLevel",
                          "height": 408
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 52.58,
                       "roll": 0,
                       "yaw": -62.97,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_6A3CFF26_7B1E_6E50_41DB_8C008F15A1AC",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "yaw": -62.97,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_6_1_0_map.gif",
                          "width": 200,
                          "class": "ImageResourceLevel",
                          "height": 77
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 31.24,
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 52.58
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": " \u0422\u0435\u0430\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                     },
                     "items": [
                      {
                       "pitch": 32.23,
                       "yaw": -62.65,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_7_0.png",
                          "width": 1025,
                          "class": "ImageResourceLevel",
                          "height": 464
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 46.47,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_6A4B43BD_7B16_95B1_41C2_240C81378546",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "yaw": -62.65,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_7_0_map.gif",
                          "width": 35,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 32.23,
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 46.47
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "12"
                     },
                     "items": [
                      {
                       "pitch": -3.47,
                       "image": {
                        "colCount": 4,
                        "frameCount": 24,
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_8_0.png",
                          "width": 800,
                          "class": "ImageResourceLevel",
                          "height": 1200
                         }
                        ],
                        "frameDuration": 33,
                        "rowCount": 6,
                        "class": "AnimatedImageResource"
                       },
                       "hfov": 19.06,
                       "yaw": -144.83,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_8193D953_8F27_38AF_41D4_9B5A0784E58C",
                     "areas": [
                      {
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": []
                    },
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -31.36,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_11_0.png",
                          "width": 519,
                          "class": "ImageResourceLevel",
                          "height": 554
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 23.77,
                       "yaw": 148.2,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_47E297F6_48A0_6280_41B7_82E23F1EF938",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2, this.camera_724DBF27_634E_CB18_41D3_7B1D61FFE03A); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": []
                    }
                   ]
                  }
                 ],
                 "hfovMax": 130,
                 "adjacentPanoramas": [
                  {
                   "yaw": 28.38,
                   "panorama": {
                    "thumbnailUrl": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_t.jpg",
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_hq.jpeg",
                         "width": 6720,
                         "class": "ImageResourceLevel",
                         "height": 3360
                        },
                        {
                         "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "items": [
                         {
                          "pitch": -9.97,
                          "image": {
                           "colCount": 4,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_0_0.png",
                             "width": 400,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ],
                           "frameDuration": 33,
                           "rowCount": 6,
                           "class": "AnimatedImageResource"
                          },
                          "hfov": 22.31,
                          "yaw": 19.8,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_768373CB_6689_801A_41CA_F3BB707A74F5",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_5C70F16F_568A_8118_41CE_4D314702C266, this.camera_72321F6E_634E_CBE8_419B_4E7CEFDC47D1); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": []
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "items": [
                         {
                          "pitch": 36.79,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_1_0.png",
                             "width": 952,
                             "class": "ImageResourceLevel",
                             "height": 458
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 48.02,
                          "roll": 0,
                          "yaw": -66.2,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_6AB2ADB8_7B36_ADB0_41D0_1D25AD06D31B",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "yaw": -66.2,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_1_1_0_map.gif",
                             "width": 200,
                             "class": "ImageResourceLevel",
                             "height": 96
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 36.79,
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 48.02
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": " \u0422\u0435\u0430\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                        },
                        "items": [
                         {
                          "pitch": 37.38,
                          "yaw": -65.71,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_2_0.png",
                             "width": 999,
                             "class": "ImageResourceLevel",
                             "height": 464
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 42.53,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_6AB2BDB9_7B36_ADB0_41C6_E2D289F014BC",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "yaw": -65.71,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_2_0_map.gif",
                             "width": 34,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 37.38,
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 42.53
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "items": [
                         {
                          "pitch": -17.18,
                          "image": {
                           "colCount": 4,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_3_0.png",
                             "width": 400,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ],
                           "frameDuration": 33,
                           "rowCount": 6,
                           "class": "AnimatedImageResource"
                          },
                          "hfov": 21.64,
                          "yaw": -159.7,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_9D7BB172_8F63_2B69_41A3_4EB339B872D7",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73, this.camera_72039F62_634E_CB18_41D0_334D4F1F787B); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": []
                       }
                      ]
                     }
                    ],
                    "hfovMax": 130,
                    "adjacentPanoramas": [
                     {
                      "yaw": -159.7,
                      "panorama": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
                      "distance": 1,
                      "backwardYaw": 28.38,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "yaw": 19.8,
                      "panorama": {
                       "thumbnailUrl": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_t.jpg",
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_hq.jpeg",
                            "width": 6720,
                            "class": "ImageResourceLevel",
                            "height": 3360
                           },
                           {
                            "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266.jpeg",
                            "width": 4002,
                            "class": "ImageResourceLevel",
                            "height": 2001
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "items": [
                            {
                             "pitch": -11.34,
                             "image": {
                              "colCount": 4,
                              "frameCount": 24,
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_0_0.png",
                                "width": 400,
                                "class": "ImageResourceLevel",
                                "height": 360
                               }
                              ],
                              "frameDuration": 33,
                              "rowCount": 6,
                              "class": "AnimatedImageResource"
                             },
                             "hfov": 22.21,
                             "yaw": 10.54,
                             "distance": 100,
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_76B14432_6686_800A_41C4_1F12B7714E91",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A, this.camera_7318BE96_634E_CD38_41C5_C399FAA40284); this.mainPlayList.set('selectedIndex', 8)",
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": []
                          },
                          {
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "items": [
                            {
                             "pitch": 37.85,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_1_0.png",
                                "width": 991,
                                "class": "ImageResourceLevel",
                                "height": 392
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 49.73,
                             "roll": 0,
                             "yaw": -78.42,
                             "distance": 100,
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_69C8A16D_7AF9_92D0_41D5_43A3EB03C8DF",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "yaw": -78.42,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_1_1_0_map.gif",
                                "width": 200,
                                "class": "ImageResourceLevel",
                                "height": 79
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 37.85,
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 49.73
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "data": {
                            "label": " \u0422\u0435\u0430\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                           },
                           "items": [
                            {
                             "pitch": 38.12,
                             "yaw": -78.61,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_2_0.png",
                                "width": 1043,
                                "class": "ImageResourceLevel",
                                "height": 440
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 44,
                             "distance": 100,
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_69C8B16D_7AF9_92D0_41D1_829A06131F27",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "yaw": -78.61,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_2_0_map.gif",
                                "width": 37,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 38.12,
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 44
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "items": [
                            {
                             "pitch": -19.58,
                             "image": {
                              "colCount": 4,
                              "frameCount": 24,
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_3_0.png",
                                "width": 400,
                                "class": "ImageResourceLevel",
                                "height": 360
                               }
                              ],
                              "frameDuration": 33,
                              "rowCount": 6,
                              "class": "AnimatedImageResource"
                             },
                             "hfov": 21.34,
                             "yaw": -166.55,
                             "distance": 100,
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_9D2CAA99_8F61_79D8_41B0_1F66A625A1C9",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068, this.camera_73647E8E_634E_CD28_41D0_61A731E860C4); this.mainPlayList.set('selectedIndex', 6)",
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": []
                          },
                          {
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "items": [
                            {
                             "pitch": -10.74,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_4_0.png",
                                "width": 303,
                                "class": "ImageResourceLevel",
                                "height": 253
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.96,
                             "yaw": -104.55,
                             "distance": 100,
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_59A20CA8_48A3_E680_41CF_AC762EC6DECF",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "  \u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0430 \u041a. \"\u0423 \u041b\u0430\u0432\u0440\u044b\""
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "yaw": -104.55,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_4_0_0_map.gif",
                                "width": 19,
                                "class": "ImageResourceLevel",
                                "height": 15
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -10.74,
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 15.96
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "hfovMax": 130,
                       "adjacentPanoramas": [
                        {
                         "yaw": -166.55,
                         "panorama": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
                         "distance": 1,
                         "backwardYaw": 19.8,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "yaw": 10.54,
                         "panorama": {
                          "thumbnailUrl": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_t.jpg",
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_hq.jpeg",
                               "width": 6720,
                               "class": "ImageResourceLevel",
                               "height": 3360
                              },
                              {
                               "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A.jpeg",
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "height": 2001
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "data": {
                               "label": "Image"
                              },
                              "items": [
                               {
                                "pitch": 1.39,
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_0_0.png",
                                   "width": 192,
                                   "class": "ImageResourceLevel",
                                   "height": 192
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 10.29,
                                "yaw": -10.47,
                                "distance": 100,
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_77877D76_6686_800A_41D6_FC51F9295C17",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.showWindow(this.window_6ED89A49_7D3A_76D0_41DB_3393D9DBA78B, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": []
                             },
                             {
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "items": [
                               {
                                "pitch": 34.86,
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_2_0.png",
                                   "width": 898,
                                   "class": "ImageResourceLevel",
                                   "height": 401
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 45.58,
                                "roll": 0,
                                "yaw": -19.05,
                                "distance": 100,
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_6973F0F9_7AFA_73B0_4197_FD3D7CAE9E6B",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "yaw": -19.05,
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_2_1_0_map.gif",
                                   "width": 200,
                                   "class": "ImageResourceLevel",
                                   "height": 89
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 34.86,
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 45.58
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "data": {
                               "label": " \u0422\u0435\u0430\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                              },
                              "items": [
                               {
                                "pitch": 34.44,
                                "yaw": -17.86,
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_3_0.png",
                                   "width": 1012,
                                   "class": "ImageResourceLevel",
                                   "height": 471
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 44.72,
                                "distance": 100,
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_6973E0F9_7AFA_73B0_41DA_7286E83AA6B9",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "yaw": -17.86,
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_3_0_map.gif",
                                   "width": 34,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 34.44,
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 44.72
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Image"
                              },
                              "items": [
                               {
                                "pitch": -18.21,
                                "image": {
                                 "colCount": 4,
                                 "frameCount": 24,
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_4_0.png",
                                   "width": 400,
                                   "class": "ImageResourceLevel",
                                   "height": 360
                                  }
                                 ],
                                 "frameDuration": 33,
                                 "rowCount": 6,
                                 "class": "AnimatedImageResource"
                                },
                                "hfov": 21.52,
                                "yaw": -109.24,
                                "distance": 100,
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_9EA09761_8F66_F76B_41BE_9C8E01A712F0",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_5C70F16F_568A_8118_41CE_4D314702C266, this.camera_730A8EAD_634E_CD68_41A4_C5AAA2910CD6); this.mainPlayList.set('selectedIndex', 7)",
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": []
                             },
                             {
                              "enabledInCardboard": true,
                              "data": {
                               "label": "9"
                              },
                              "items": [
                               {
                                "pitch": -6.93,
                                "image": {
                                 "colCount": 4,
                                 "frameCount": 24,
                                 "levels": [
                                  {
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_5_0.png",
                                   "width": 800,
                                   "class": "ImageResourceLevel",
                                   "height": 1200
                                  }
                                 ],
                                 "frameDuration": 41,
                                 "rowCount": 6,
                                 "class": "AnimatedImageResource"
                                },
                                "hfov": 28.09,
                                "yaw": 38.14,
                                "distance": 100,
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_B65A90CC_B8C0_132A_41D9_4A6BC77B492E",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC, this.camera_73021EB3_634E_CD78_41D5_FE8F8B355321); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": []
                             }
                            ]
                           }
                          ],
                          "hfovMax": 130,
                          "adjacentPanoramas": [
                           {
                            "yaw": -109.24,
                            "panorama": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
                            "distance": 1,
                            "backwardYaw": 10.54,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "yaw": 38.14,
                            "panorama": {
                             "thumbnailUrl": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_t.jpg",
                             "frames": [
                              {
                               "sphere": {
                                "levels": [
                                 {
                                  "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_hq.jpeg",
                                  "width": 6720,
                                  "class": "ImageResourceLevel",
                                  "height": 3360
                                 },
                                 {
                                  "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC.jpeg",
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "height": 2001
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "items": [
                                  {
                                   "pitch": -18.55,
                                   "image": {
                                    "colCount": 4,
                                    "frameCount": 24,
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_0_0.png",
                                      "width": 400,
                                      "class": "ImageResourceLevel",
                                      "height": 360
                                     }
                                    ],
                                    "frameDuration": 33,
                                    "rowCount": 6,
                                    "class": "AnimatedImageResource"
                                   },
                                   "hfov": 21.47,
                                   "yaw": -150.07,
                                   "distance": 100,
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_7655B0FB_669B_81FA_41D9_26C1393348A2",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5, this.camera_72168F56_634E_CB38_41CF_08B37C378B6D); this.mainPlayList.set('selectedIndex', 10)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": []
                                },
                                {
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "items": [
                                  {
                                   "pitch": -20.61,
                                   "image": {
                                    "colCount": 4,
                                    "frameCount": 24,
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_1_0.png",
                                      "width": 400,
                                      "class": "ImageResourceLevel",
                                      "height": 360
                                     }
                                    ],
                                    "frameDuration": 33,
                                    "rowCount": 6,
                                    "class": "AnimatedImageResource"
                                   },
                                   "hfov": 21.2,
                                   "yaw": 30.44,
                                   "distance": 100,
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_9A0B060A_8F21_68B8_41DB_F0D63790F871",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A, this.camera_72180F4A_634E_CB28_41B6_604CD6FF849B); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": []
                                },
                                {
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "items": [
                                  {
                                   "pitch": 31.24,
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_2_0.png",
                                      "width": 1058,
                                      "class": "ImageResourceLevel",
                                      "height": 403
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 52.65,
                                   "roll": 0,
                                   "yaw": -62.97,
                                   "distance": 100,
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C0820931_D3F2_45AC_41B1_0003877DDCBD",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "yaw": -62.97,
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_2_1_0_map.gif",
                                      "width": 200,
                                      "class": "ImageResourceLevel",
                                      "height": 75
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 31.24,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 52.65
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": " \u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                                 },
                                 "items": [
                                  {
                                   "pitch": 32.23,
                                   "yaw": -62.66,
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_3_0.png",
                                      "width": 1025,
                                      "class": "ImageResourceLevel",
                                      "height": 464
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 46.47,
                                   "distance": 100,
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C0822931_D3F2_45AC_41A1_2B29964139AB",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "yaw": -62.66,
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_3_0_map.gif",
                                      "width": 35,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 32.23,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 46.47
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "hfovMax": 130,
                             "adjacentPanoramas": [
                              {
                               "yaw": 30.44,
                               "panorama": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
                               "distance": 1,
                               "backwardYaw": 38.14,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "yaw": -150.07,
                               "panorama": {
                                "thumbnailUrl": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_t.jpg",
                                "frames": [
                                 {
                                  "sphere": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_hq.jpeg",
                                     "width": 6720,
                                     "class": "ImageResourceLevel",
                                     "height": 3360
                                    },
                                    {
                                     "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5.jpeg",
                                     "width": 4002,
                                     "class": "ImageResourceLevel",
                                     "height": 2001
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -16.49,
                                      "image": {
                                       "colCount": 4,
                                       "frameCount": 24,
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_0_0.png",
                                         "width": 400,
                                         "class": "ImageResourceLevel",
                                         "height": 360
                                        }
                                       ],
                                       "frameDuration": 33,
                                       "rowCount": 6,
                                       "class": "AnimatedImageResource"
                                      },
                                      "hfov": 21.72,
                                      "yaw": -151.1,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_77D8D647_669A_8009_41BC_2B0D079A73FC",
                                    "areas": [
                                     {
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997, this.camera_722F6F80_634E_CB18_41D0_966C844B9E6D); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": []
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -19.27,
                                      "image": {
                                       "colCount": 4,
                                       "frameCount": 24,
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_1_0.png",
                                         "width": 400,
                                         "class": "ImageResourceLevel",
                                         "height": 360
                                        }
                                       ],
                                       "frameDuration": 33,
                                       "rowCount": 6,
                                       "class": "AnimatedImageResource"
                                      },
                                      "hfov": 21.38,
                                      "yaw": 31.12,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_9AD7A216_8F21_E8A8_41D2_A62D3B800C0E",
                                    "areas": [
                                     {
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC, this.camera_72DE3F8C_634E_CB28_41D5_01F5ED4A00AE); this.mainPlayList.set('selectedIndex', 9)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": []
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "items": [
                                     {
                                      "pitch": 35.65,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_2_0.png",
                                         "width": 1016,
                                         "class": "ImageResourceLevel",
                                         "height": 404
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 50.82,
                                      "roll": 0,
                                      "yaw": -62.93,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C3CEBF20_D3F2_BDAC_41DF_05E80295FB95",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "yaw": -62.93,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_2_1_0_map.gif",
                                         "width": 200,
                                         "class": "ImageResourceLevel",
                                         "height": 79
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": 35.65,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 50.82
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": " \u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                                    },
                                    "items": [
                                     {
                                      "pitch": 34.99,
                                      "yaw": -62.66,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_3_0.png",
                                         "width": 1025,
                                         "class": "ImageResourceLevel",
                                         "height": 464
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 45,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C3CEAF20_D3F2_BDAC_41D9_39481E9A65A1",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "yaw": -62.66,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_3_0_map.gif",
                                         "width": 35,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": 34.99,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 45
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -21.29,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_4_0.png",
                                         "width": 373,
                                         "class": "ImageResourceLevel",
                                         "height": 309
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 18.64,
                                      "yaw": 137.5,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_2B867491_25CD_32F6_41B9_B7496F8CACE9",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true,
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "   \u0425\u0430\u0434\u0438\u0435\u0432\u0430 \u0420. \"\u041f\u043e\u0441\u0442\u0438\u0440\u043e\u0447\u043d\u0430\u044f\" "
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "yaw": 137.5,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_4_0_0_map.gif",
                                         "width": 19,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -21.29,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 18.64
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -14.13,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_5_0.png",
                                         "width": 317,
                                         "class": "ImageResourceLevel",
                                         "height": 295
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 16.48,
                                      "yaw": -75.29,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_47CC87D3_48A1_E280_41BB_B7A2459C063B",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true,
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "  \u0421\u043f\u0438\u0436\u0435\u0432\u0430\u044f \u041a. \"\u0421\u0422\u0423\u041b\""
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "yaw": -75.29,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_5_0_0_map.gif",
                                         "width": 17,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.13,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 16.48
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -19.78,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_6_0.png",
                                         "width": 373,
                                         "class": "ImageResourceLevel",
                                         "height": 309
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 18.83,
                                      "yaw": 168.65,
                                      "distance": 100,
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_47C004A7_48A0_E68F_41D1_98C44C5F4941",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true,
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "   \u0425\u0430\u0434\u0438\u0435\u0432\u0430 \u0420. \"\u041a\u0443\u0445\u043d\u044f\" "
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "yaw": 168.65,
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_6_0_0_map.gif",
                                         "width": 19,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -19.78,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 18.83
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "hfovMax": 130,
                                "adjacentPanoramas": [
                                 {
                                  "yaw": -151.1,
                                  "panorama": {
                                   "thumbnailUrl": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_t.jpg",
                                   "frames": [
                                    {
                                     "sphere": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_hq.jpeg",
                                        "width": 6720,
                                        "class": "ImageResourceLevel",
                                        "height": 3360
                                       },
                                       {
                                        "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997.jpeg",
                                        "width": 4002,
                                        "class": "ImageResourceLevel",
                                        "height": 2001
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "12"
                                       },
                                       "items": [
                                        {
                                         "pitch": -4.26,
                                         "image": {
                                          "colCount": 4,
                                          "frameCount": 24,
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_0_0.png",
                                            "width": 800,
                                            "class": "ImageResourceLevel",
                                            "height": 1200
                                           }
                                          ],
                                          "frameDuration": 41,
                                          "rowCount": 6,
                                          "class": "AnimatedImageResource"
                                         },
                                         "hfov": 13.7,
                                         "yaw": -149.25,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_77569671_6699_8006_41AF_F8271728E74A",
                                       "areas": [
                                        {
                                         "mapColor": "image",
                                         "click": "this.mainPlayList.set('selectedIndex', 12)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": []
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -22.53,
                                         "image": {
                                          "colCount": 4,
                                          "frameCount": 24,
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_1_0.png",
                                            "width": 400,
                                            "class": "ImageResourceLevel",
                                            "height": 360
                                           }
                                          ],
                                          "frameDuration": 33,
                                          "rowCount": 6,
                                          "class": "AnimatedImageResource"
                                         },
                                         "hfov": 20.92,
                                         "yaw": 21.98,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_99B8D78F_8F2F_77B8_41DA_A2C33C804CF9",
                                       "areas": [
                                        {
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5, this.camera_7328DEC7_634E_CD18_41AC_E97ACC1599F7); this.mainPlayList.set('selectedIndex', 10)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": []
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Polygon"
                                       },
                                       "items": [
                                        {
                                         "pitch": 31.35,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_4_0.png",
                                            "width": 1057,
                                            "class": "ImageResourceLevel",
                                            "height": 403
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 52.63,
                                         "roll": 0,
                                         "yaw": -64.44,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_DC7EBB00_D3FD_C56C_41CE_C7C9716366BF",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "yaw": -64.44,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_4_1_0_map.gif",
                                            "width": 200,
                                            "class": "ImageResourceLevel",
                                            "height": 76
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": 31.35,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 52.63
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": " \u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                                       },
                                       "items": [
                                        {
                                         "pitch": 31.47,
                                         "yaw": -64.67,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_5_0.png",
                                            "width": 1025,
                                            "class": "ImageResourceLevel",
                                            "height": 464
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 46.85,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_DC7E8B01_D3FD_C56C_41E4_C98588EA39C2",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "yaw": -64.67,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_5_0_map.gif",
                                            "width": 35,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": 31.47,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 46.85
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -17.33,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_6_0.png",
                                            "width": 447,
                                            "class": "ImageResourceLevel",
                                            "height": 405
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 22.9,
                                         "yaw": 45.03,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_473D4004_48A0_1D80_41CD_0F31A37EC6BC",
                                       "areas": [
                                        {
                                         "mapColor": "image",
                                         "click": "this.mainPlayList.set('selectedIndex', 20)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": []
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -20.29,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_7_0.png",
                                            "width": 373,
                                            "class": "ImageResourceLevel",
                                            "height": 309
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 18.77,
                                         "yaw": 143.53,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_58BF8797_48A0_6280_41C5_424A1BFB4C3F",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "displayTooltipInTouchScreens": true,
                                         "class": "HotspotPanoramaOverlayArea",
                                         "toolTip": "  \u0426\u0432\u0435\u0442\u043d\u043e\u0432\u0430 \u0410. \"\u0423\u0422\u0420\u041e \u0412 \u041c\u0410\u0421\u0422\u0415\u0420\u0421\u041a\u041e\u0419\""
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "yaw": 143.53,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_7_0_0_map.gif",
                                            "width": 19,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -20.29,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 18.77
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -19.03,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_8_0.png",
                                            "width": 373,
                                            "class": "ImageResourceLevel",
                                            "height": 309
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 18.91,
                                         "yaw": -106.94,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_59922387_48A0_2280_41CE_C90BD419CF29",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "displayTooltipInTouchScreens": true,
                                         "class": "HotspotPanoramaOverlayArea",
                                         "toolTip": "  \u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0430 \u041a. \"\u0423 \u041b\u0430\u0432\u0440\u044b\""
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "yaw": -106.94,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_8_0_0_map.gif",
                                            "width": 19,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -19.03,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 18.91
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -20.03,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_9_0.png",
                                            "width": 373,
                                            "class": "ImageResourceLevel",
                                            "height": 309
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 18.8,
                                         "yaw": -54.43,
                                         "distance": 100,
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_596E05AF_48A0_269F_4198_8F4F9B5BB6D8",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "displayTooltipInTouchScreens": true,
                                         "class": "HotspotPanoramaOverlayArea",
                                         "toolTip": "  \u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0430 \u041a. \"\u041f\u043e\u0440\u0442\u0440\u0435\u0442\""
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "yaw": -54.43,
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_9_0_0_map.gif",
                                            "width": 19,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -20.03,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 18.8
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "hfovMax": 130,
                                   "adjacentPanoramas": [
                                    {
                                     "yaw": 21.98,
                                     "panorama": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
                                     "distance": 1,
                                     "backwardYaw": -151.1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "thumbnailUrl": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_t.jpg",
                                      "frames": [
                                       {
                                        "sphere": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_hq.jpeg",
                                           "width": 6720,
                                           "class": "ImageResourceLevel",
                                           "height": 3360
                                          },
                                          {
                                           "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD.jpeg",
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "height": 2001
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "items": [
                                           {
                                            "pitch": -19.24,
                                            "image": {
                                             "colCount": 4,
                                             "frameCount": 24,
                                             "levels": [
                                              {
                                               "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_0_HS_0_0.png",
                                               "width": 400,
                                               "class": "ImageResourceLevel",
                                               "height": 360
                                              }
                                             ],
                                             "frameDuration": 33,
                                             "rowCount": 6,
                                             "class": "AnimatedImageResource"
                                            },
                                            "hfov": 21.39,
                                            "yaw": 16.03,
                                            "distance": 100,
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_77491191_669E_8006_41D4_7895228F4C7B",
                                          "areas": [
                                           {
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_73F64EF0_634E_CAF8_41D2_91973D0B0731); this.mainPlayList.set('selectedIndex', 13)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": []
                                         }
                                        ]
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "adjacentPanoramas": [
                                       {
                                        "yaw": 16.03,
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_t.jpg",
                                         "frames": [
                                          {
                                           "sphere": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_hq.jpeg",
                                              "width": 6720,
                                              "class": "ImageResourceLevel",
                                              "height": 3360
                                             },
                                             {
                                              "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813.jpeg",
                                              "width": 4002,
                                              "class": "ImageResourceLevel",
                                              "height": 2001
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "thumbnailUrl": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "enabledInCardboard": true,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -15.8,
                                               "image": {
                                                "colCount": 4,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_0_0.png",
                                                  "width": 400,
                                                  "class": "ImageResourceLevel",
                                                  "height": 360
                                                 }
                                                ],
                                                "frameDuration": 33,
                                                "rowCount": 6,
                                                "class": "AnimatedImageResource"
                                               },
                                               "hfov": 21.79,
                                               "yaw": -165.19,
                                               "distance": 100,
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_7765CCF4_6699_800D_41D0_23C1FAA3CA05",
                                             "areas": [
                                              {
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD, this.camera_73889F05_634E_CB18_415C_ABC100E7EF48); this.mainPlayList.set('selectedIndex', 12)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": []
                                            },
                                            {
                                             "enabledInCardboard": true,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -8.25,
                                               "image": {
                                                "colCount": 4,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_1_0.png",
                                                  "width": 400,
                                                  "class": "ImageResourceLevel",
                                                  "height": 360
                                                 }
                                                ],
                                                "frameDuration": 33,
                                                "rowCount": 6,
                                                "class": "AnimatedImageResource"
                                               },
                                               "hfov": 22.42,
                                               "yaw": -19.66,
                                               "distance": 100,
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_75B655DC_6687_803E_41D2_657CE2602A20",
                                             "areas": [
                                              {
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76, this.camera_73B4FF12_634E_CB38_41D2_2075247659C3); this.mainPlayList.set('selectedIndex', 15)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": []
                                            },
                                            {
                                             "enabledInCardboard": true,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -26.1,
                                               "image": {
                                                "colCount": 4,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_2_0.png",
                                                  "width": 400,
                                                  "class": "ImageResourceLevel",
                                                  "height": 360
                                                 }
                                                ],
                                                "frameDuration": 33,
                                                "rowCount": 6,
                                                "class": "AnimatedImageResource"
                                               },
                                               "hfov": 20.34,
                                               "yaw": -60.85,
                                               "distance": 100,
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_72D6E12C_668A_801E_41CA_6133BDDE646B",
                                             "areas": [
                                              {
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84, this.camera_73865F0C_634E_CB28_41D1_D00408E12E9C); this.mainPlayList.set('selectedIndex', 14)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": []
                                            },
                                            {
                                             "data": {
                                              "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
                                             },
                                             "items": [
                                              {
                                               "pitch": -6.91,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_3_0.png",
                                                  "width": 258,
                                                  "class": "ImageResourceLevel",
                                                  "height": 250
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 13.75,
                                               "yaw": 148.24,
                                               "distance": 100,
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_A9857036_B940_3366_41B5_9A2375828C4C",
                                             "areas": [
                                              {
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": []
                                            }
                                           ]
                                          }
                                         ],
                                         "hfovMax": 130,
                                         "adjacentPanoramas": [
                                          {
                                           "yaw": -165.19,
                                           "panorama": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
                                           "distance": 1,
                                           "backwardYaw": 16.03,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "yaw": -60.85,
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_t.jpg",
                                            "frames": [
                                             {
                                              "sphere": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_hq.jpeg",
                                                 "width": 6720,
                                                 "class": "ImageResourceLevel",
                                                 "height": 3360
                                                },
                                                {
                                                 "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84.jpeg",
                                                 "width": 4002,
                                                 "class": "ImageResourceLevel",
                                                 "height": 2001
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_t.jpg",
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "enabledInCardboard": true,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -14.43,
                                                  "image": {
                                                   "colCount": 4,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_0_HS_1_0.png",
                                                     "width": 400,
                                                     "class": "ImageResourceLevel",
                                                     "height": 360
                                                    }
                                                   ],
                                                   "frameDuration": 33,
                                                   "rowCount": 6,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "hfov": 21.94,
                                                  "yaw": 45.88,
                                                  "distance": 100,
                                                  "class": "HotspotPanoramaOverlayImage"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_9AD1FA65_8F21_3968_41DE_F2366F1E4DB5",
                                                "areas": [
                                                 {
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_7331CEC0_634E_CD18_41D3_A8EF4CAFB602); this.mainPlayList.set('selectedIndex', 13)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": []
                                               },
                                               {
                                                "enabledInCardboard": true,
                                                "data": {
                                                 "label": "9"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -2.41,
                                                  "image": {
                                                   "colCount": 4,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_0_HS_2_0.png",
                                                     "width": 800,
                                                     "class": "ImageResourceLevel",
                                                     "height": 1200
                                                    }
                                                   ],
                                                   "frameDuration": 41,
                                                   "rowCount": 6,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "hfov": 17.48,
                                                  "yaw": -137.59,
                                                  "distance": 100,
                                                  "class": "HotspotPanoramaOverlayImage"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_B673C849_B8C0_132A_41A3_340CE77ABE5F",
                                                "areas": [
                                                 {
                                                  "mapColor": "image",
                                                  "click": "this.mainPlayList.set('selectedIndex', 12)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": []
                                               }
                                              ]
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD"
                                             },
                                             {
                                              "yaw": 45.88,
                                              "panorama": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
                                              "distance": 1,
                                              "backwardYaw": -60.85,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "id": "panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
                                            "hfovMin": 60,
                                            "vfov": 180,
                                            "pitch": 0,
                                            "label": "R0010055",
                                            "hfov": 360,
                                            "partial": false,
                                            "class": "Panorama"
                                           },
                                           "distance": 1,
                                           "backwardYaw": 45.88,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "yaw": -19.66,
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_t.jpg",
                                            "frames": [
                                             {
                                              "sphere": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_hq.jpeg",
                                                 "width": 6720,
                                                 "class": "ImageResourceLevel",
                                                 "height": 3360
                                                },
                                                {
                                                 "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76.jpeg",
                                                 "width": 4002,
                                                 "class": "ImageResourceLevel",
                                                 "height": 2001
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_t.jpg",
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "enabledInCardboard": true,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -31.14,
                                                  "image": {
                                                   "colCount": 4,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_0_HS_0_0.png",
                                                     "width": 400,
                                                     "class": "ImageResourceLevel",
                                                     "height": 360
                                                    }
                                                   ],
                                                   "frameDuration": 33,
                                                   "rowCount": 6,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "hfov": 19.39,
                                                  "yaw": -6.6,
                                                  "distance": 100,
                                                  "class": "HotspotPanoramaOverlayImage"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_75D49014_6686_800D_41BE_448F27D8A16D",
                                                "areas": [
                                                 {
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C7361D2_568A_8108_41B1_D52601D44702, this.camera_727BCF2D_634E_CB68_41D7_E0626B424928); this.mainPlayList.set('selectedIndex', 16)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": []
                                               },
                                               {
                                                "enabledInCardboard": true,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -41.54,
                                                  "image": {
                                                   "colCount": 4,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_0_HS_1_0.png",
                                                     "width": 400,
                                                     "class": "ImageResourceLevel",
                                                     "height": 360
                                                    }
                                                   ],
                                                   "frameDuration": 33,
                                                   "rowCount": 6,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "hfov": 16.95,
                                                  "yaw": 139.23,
                                                  "distance": 100,
                                                  "class": "HotspotPanoramaOverlayImage"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_72B20E99_6689_8006_41BA_94D60CB21068",
                                                "areas": [
                                                 {
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_72695F3E_634E_CB68_41BD_EFC8EE4F6F9E); this.mainPlayList.set('selectedIndex', 13)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": []
                                               }
                                              ]
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "adjacentPanoramas": [
                                             {
                                              "yaw": -6.6,
                                              "panorama": {
                                               "thumbnailUrl": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_t.jpg",
                                               "frames": [
                                                {
                                                 "sphere": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_hq.jpeg",
                                                    "width": 6720,
                                                    "class": "ImageResourceLevel",
                                                    "height": 3360
                                                   },
                                                   {
                                                    "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702.jpeg",
                                                    "width": 4002,
                                                    "class": "ImageResourceLevel",
                                                    "height": 2001
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "thumbnailUrl": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_t.jpg",
                                                 "class": "SphericPanoramaFrame",
                                                 "overlays": [
                                                  {
                                                   "enabledInCardboard": true,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "items": [
                                                    {
                                                     "pitch": -43.94,
                                                     "image": {
                                                      "colCount": 4,
                                                      "frameCount": 24,
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_0_0.png",
                                                        "width": 400,
                                                        "class": "ImageResourceLevel",
                                                        "height": 360
                                                       }
                                                      ],
                                                      "frameDuration": 33,
                                                      "rowCount": 6,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "hfov": 16.31,
                                                     "yaw": -68.05,
                                                     "distance": 100,
                                                     "class": "HotspotPanoramaOverlayImage"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_7540B166_6689_800D_41D5_BEC7EED15F2F",
                                                   "areas": [
                                                    {
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76, this.camera_736F7E87_634E_CD18_419D_8AE179EF6556); this.mainPlayList.set('selectedIndex', 15)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": []
                                                  },
                                                  {
                                                   "enabledInCardboard": true,
                                                   "data": {
                                                    "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
                                                   },
                                                   "items": [
                                                    {
                                                     "pitch": 12.8,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_1_0.png",
                                                        "width": 1152,
                                                        "class": "ImageResourceLevel",
                                                        "height": 272
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 56.61,
                                                     "roll": 0,
                                                     "yaw": 69.71,
                                                     "distance": 100,
                                                     "class": "HotspotPanoramaOverlayImage"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_DEB444E4_D33D_CCB4_41E5_73EDBD05A185",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.mainPlayList.set('selectedIndex', 18)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "yaw": 69.71,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_1_1_0_map.gif",
                                                        "width": 200,
                                                        "class": "ImageResourceLevel",
                                                        "height": 47
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": 12.8,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 56.61
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "enabledInCardboard": true,
                                                   "data": {
                                                    "label": "\u041f\u041e\u0417\u0414\u0420\u0410\u0412\u041b\u042f\u0415\u041c \u0412\u042b \u041f\u0420\u041e\u0428\u041b\u0418 \u000d                VR \u0422\u0423\u0420!\u000d"
                                                   },
                                                   "items": [
                                                    {
                                                     "pitch": 11.74,
                                                     "yaw": 71.35,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_2_0.png",
                                                        "width": 1036,
                                                        "class": "ImageResourceLevel",
                                                        "height": 201
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 54.36,
                                                     "distance": 100,
                                                     "class": "HotspotPanoramaOverlayImage"
                                                    }
                                                   ],
                                                   "useHandCursor": false,
                                                   "id": "overlay_DE70CC72_D332_43AC_41E9_74E9C55435E5",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.mainPlayList.set('selectedIndex', 18)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "yaw": 71.35,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_2_0_map.gif",
                                                        "width": 82,
                                                        "class": "ImageResourceLevel",
                                                        "height": 16
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": 11.74,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 54.36
                                                    }
                                                   ]
                                                  }
                                                 ]
                                                }
                                               ],
                                               "hfovMax": 130,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "thumbnailUrl": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_t.jpg",
                                                  "frames": [
                                                   {
                                                    "sphere": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_hq.jpeg",
                                                       "width": 6720,
                                                       "class": "ImageResourceLevel",
                                                       "height": 3360
                                                      },
                                                      {
                                                       "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF.jpeg",
                                                       "width": 4002,
                                                       "class": "ImageResourceLevel",
                                                       "height": 2001
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "thumbnailUrl": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_t.jpg",
                                                    "class": "SphericPanoramaFrame",
                                                    "overlays": [
                                                     {
                                                      "enabledInCardboard": true,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "items": [
                                                       {
                                                        "pitch": 24.58,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_7_0.png",
                                                           "width": 1234,
                                                           "class": "ImageResourceLevel",
                                                           "height": 979
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 60.12,
                                                        "yaw": 67.6,
                                                        "distance": 100,
                                                        "class": "HotspotPanoramaOverlayImage"
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "id": "overlay_4704D1DE_48A0_1E80_41C0_E42DB63BC253",
                                                      "areas": [
                                                       {
                                                        "mapColor": "image",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": []
                                                     },
                                                     {
                                                      "enabledInCardboard": true,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "items": [
                                                       {
                                                        "pitch": -38.54,
                                                        "image": {
                                                         "colCount": 4,
                                                         "frameCount": 24,
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_2_0.png",
                                                           "width": 400,
                                                           "class": "ImageResourceLevel",
                                                           "height": 360
                                                          }
                                                         ],
                                                         "frameDuration": 33,
                                                         "rowCount": 6,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "hfov": 24.2,
                                                        "yaw": -72.21,
                                                        "distance": 100,
                                                        "class": "HotspotPanoramaOverlayImage"
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "id": "overlay_C704D57E_D7D9_D87C_41C7_9E14FDB97CBC",
                                                      "areas": [
                                                       {
                                                        "mapColor": "image",
                                                        "click": "this.mainPlayList.set('selectedIndex', 15)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       },
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       },
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": []
                                                     },
                                                     {
                                                      "enabledInCardboard": true,
                                                      "data": {
                                                       "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
                                                      },
                                                      "items": [
                                                       {
                                                        "pitch": 12.8,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_5_0.png",
                                                           "width": 1152,
                                                           "class": "ImageResourceLevel",
                                                           "height": 272
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 56.61,
                                                        "roll": 0,
                                                        "yaw": 69.71,
                                                        "distance": 100,
                                                        "class": "HotspotPanoramaOverlayImage"
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "id": "overlay_CC6B9F08_D8AE_C984_41D8_B2436E685EFD",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       },
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "yaw": 69.71,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_5_1_0_map.gif",
                                                           "width": 200,
                                                           "class": "ImageResourceLevel",
                                                           "height": 47
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": 12.8,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "hfov": 56.61
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "enabledInCardboard": true,
                                                      "data": {
                                                       "label": "\u041f\u041e\u0417\u0414\u0420\u0410\u0412\u041b\u042f\u0415\u041c \u0412\u042b \u041f\u0420\u041e\u0428\u041b\u0418 \u000d                  VR \u0422\u0423\u0420!\u000d"
                                                      },
                                                      "items": [
                                                       {
                                                        "pitch": 11.74,
                                                        "yaw": 71.35,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_6_0.png",
                                                           "width": 1036,
                                                           "class": "ImageResourceLevel",
                                                           "height": 201
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 54.36,
                                                        "distance": 100,
                                                        "class": "HotspotPanoramaOverlayImage"
                                                       }
                                                      ],
                                                      "useHandCursor": false,
                                                      "id": "overlay_CC6B8F08_D8AE_C984_41CC_C78CD705AF2F",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       },
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "yaw": 71.35,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_0_HS_6_0_map.gif",
                                                           "width": 82,
                                                           "class": "ImageResourceLevel",
                                                           "height": 16
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": 11.74,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "hfov": 54.36
                                                       }
                                                      ]
                                                     }
                                                    ]
                                                   }
                                                  ],
                                                  "hfovMax": 130,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76"
                                                   }
                                                  ],
                                                  "id": "panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF",
                                                  "hfovMin": 60,
                                                  "vfov": 180,
                                                  "pitch": 0,
                                                  "label": "R0010057 2",
                                                  "hfov": 360,
                                                  "partial": false,
                                                  "class": "Panorama"
                                                 }
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF"
                                                },
                                                {
                                                 "yaw": -68.05,
                                                 "panorama": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
                                                 "distance": 1,
                                                 "backwardYaw": -6.6,
                                                 "class": "AdjacentPanorama"
                                                }
                                               ],
                                               "id": "panorama_5C7361D2_568A_8108_41B1_D52601D44702",
                                               "hfovMin": 60,
                                               "vfov": 180,
                                               "pitch": 0,
                                               "label": "R0010057",
                                               "hfov": 360,
                                               "partial": false,
                                               "class": "Panorama"
                                              },
                                              "distance": 1,
                                              "backwardYaw": -68.05,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "yaw": 139.23,
                                              "panorama": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
                                              "distance": 1,
                                              "backwardYaw": -19.66,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "id": "panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
                                            "hfovMin": 60,
                                            "vfov": 180,
                                            "pitch": 0,
                                            "label": "R0010056",
                                            "hfov": 360,
                                            "partial": false,
                                            "class": "Panorama"
                                           },
                                           "distance": 1,
                                           "backwardYaw": 139.23,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "id": "panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
                                         "hfovMin": 60,
                                         "vfov": 180,
                                         "pitch": 0,
                                         "label": "R0010054",
                                         "hfov": 360,
                                         "partial": false,
                                         "class": "Panorama"
                                        },
                                        "distance": 1,
                                        "backwardYaw": -165.19,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "id": "panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
                                      "hfovMin": 60,
                                      "vfov": 180,
                                      "pitch": 0,
                                      "label": "R0010051",
                                      "hfov": 360,
                                      "partial": false,
                                      "class": "Panorama"
                                     }
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "thumbnailUrl": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_t.jpg",
                                      "frames": [
                                       {
                                        "sphere": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_hq.jpeg",
                                           "width": 6720,
                                           "class": "ImageResourceLevel",
                                           "height": 3360
                                          },
                                          {
                                           "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA.jpeg",
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "height": 2001
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "data": {
                                           "label": "12"
                                          },
                                          "items": [
                                           {
                                            "pitch": -4.26,
                                            "image": {
                                             "colCount": 4,
                                             "frameCount": 24,
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_0_0.png",
                                               "width": 800,
                                               "class": "ImageResourceLevel",
                                               "height": 1200
                                              }
                                             ],
                                             "frameDuration": 41,
                                             "rowCount": 6,
                                             "class": "AnimatedImageResource"
                                            },
                                            "hfov": 13.7,
                                            "yaw": -149.25,
                                            "distance": 100,
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_0FED4383_0164_1502_4170_4D4386F53955",
                                          "areas": [
                                           {
                                            "mapColor": "image",
                                            "click": "this.mainPlayList.set('selectedIndex', 12)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": []
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "items": [
                                           {
                                            "pitch": -24.04,
                                            "image": {
                                             "colCount": 4,
                                             "frameCount": 24,
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_1_0.png",
                                               "width": 400,
                                               "class": "ImageResourceLevel",
                                               "height": 360
                                              }
                                             ],
                                             "frameDuration": 33,
                                             "rowCount": 6,
                                             "class": "AnimatedImageResource"
                                            },
                                            "hfov": 20.69,
                                            "yaw": 23.23,
                                            "distance": 100,
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_0FEEB383_0164_1502_4161_1AC7B656C7FE",
                                          "areas": [
                                           {
                                            "mapColor": "image",
                                            "click": "this.mainPlayList.set('selectedIndex', 10)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": []
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "data": {
                                           "label": "Polygon"
                                          },
                                          "items": [
                                           {
                                            "pitch": 31.35,
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_2_0.png",
                                               "width": 1057,
                                               "class": "ImageResourceLevel",
                                               "height": 404
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 52.61,
                                            "roll": 0,
                                            "yaw": -64.44,
                                            "distance": 100,
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_0FEEF383_0164_1502_4171_C6893D41B2AE",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "yaw": -64.44,
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_2_1_0_map.gif",
                                               "width": 200,
                                               "class": "ImageResourceLevel",
                                               "height": 76
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": 31.35,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 52.61
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "data": {
                                           "label": " \u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                                          },
                                          "items": [
                                           {
                                            "pitch": 31.47,
                                            "yaw": -64.67,
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_3_0.png",
                                               "width": 1025,
                                               "class": "ImageResourceLevel",
                                               "height": 464
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 46.85,
                                            "distance": 100,
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_0FEEE384_0164_1506_4173_C5A4EB824AA6",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "yaw": -64.67,
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_114B085F_0164_3303_4162_FBA5833CE7CA_0_HS_3_0_map.gif",
                                               "width": 35,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": 31.47,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 46.85
                                           }
                                          ]
                                         }
                                        ]
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD"
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5"
                                       }
                                      ],
                                      "id": "panorama_114B085F_0164_3303_4162_FBA5833CE7CA",
                                      "hfovMin": 60,
                                      "vfov": 180,
                                      "pitch": 0,
                                      "label": "R0010050 \u2014 \u043a\u043e\u043f\u0438\u044f",
                                      "hfov": 360,
                                      "partial": false,
                                      "class": "Panorama"
                                     }
                                    }
                                   ],
                                   "id": "panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
                                   "hfovMin": 60,
                                   "vfov": 180,
                                   "pitch": 0,
                                   "label": "R0010050",
                                   "hfov": 360,
                                   "partial": false,
                                   "class": "Panorama"
                                  },
                                  "distance": 1,
                                  "backwardYaw": 21.98,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "yaw": 31.12,
                                  "panorama": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
                                  "distance": 1,
                                  "backwardYaw": -150.07,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "id": "panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
                                "hfovMin": 60,
                                "vfov": 180,
                                "pitch": 0,
                                "label": "R0010049",
                                "hfov": 360,
                                "partial": false,
                                "class": "Panorama"
                               },
                               "distance": 1,
                               "backwardYaw": 31.12,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "id": "panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
                             "hfovMin": 60,
                             "vfov": 180,
                             "pitch": 0,
                             "label": "R0010048",
                             "hfov": 360,
                             "partial": false,
                             "class": "Panorama"
                            },
                            "distance": 1,
                            "backwardYaw": 30.44,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "id": "panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
                          "hfovMin": 60,
                          "vfov": 180,
                          "pitch": 0,
                          "label": "R0010047",
                          "hfov": 360,
                          "partial": false,
                          "class": "Panorama"
                         },
                         "distance": 1,
                         "backwardYaw": -109.24,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "id": "panorama_5C70F16F_568A_8118_41CE_4D314702C266",
                       "hfovMin": 60,
                       "vfov": 180,
                       "pitch": 0,
                       "label": "R0010046",
                       "hfov": 360,
                       "partial": false,
                       "class": "Panorama"
                      },
                      "distance": 1,
                      "backwardYaw": -166.55,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "id": "panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
                    "hfovMin": 60,
                    "vfov": 180,
                    "pitch": 0,
                    "label": "R0010045",
                    "hfov": 360,
                    "partial": false,
                    "class": "Panorama"
                   },
                   "distance": 1,
                   "backwardYaw": -159.7,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "yaw": 148.2,
                   "panorama": {
                    "thumbnailUrl": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_t.jpg",
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_hq.jpeg",
                         "width": 6720,
                         "class": "ImageResourceLevel",
                         "height": 3360
                        },
                        {
                         "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "items": [
                         {
                          "pitch": -15.12,
                          "image": {
                           "colCount": 4,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_0_0.png",
                             "width": 400,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ],
                           "frameDuration": 33,
                           "rowCount": 6,
                           "class": "AnimatedImageResource"
                          },
                          "hfov": 21.87,
                          "yaw": 28.38,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_0F0B0FEA_012C_0D0D_4145_399B7BE85CE6",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.mainPlayList.set('selectedIndex', 6)",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": []
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "items": [
                         {
                          "pitch": 31.24,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_1_0.png",
                             "width": 1056,
                             "class": "ImageResourceLevel",
                             "height": 408
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 52.55,
                          "roll": 0,
                          "yaw": -62.97,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_0F0F6FEB_012C_0D03_4165_47EEC7024D7C",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "yaw": -62.97,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_1_1_0_map.gif",
                             "width": 200,
                             "class": "ImageResourceLevel",
                             "height": 77
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 31.24,
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 52.55
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": " \u0422\u0435\u0430\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                        },
                        "items": [
                         {
                          "pitch": 32.23,
                          "yaw": -62.65,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_2_0.png",
                             "width": 1025,
                             "class": "ImageResourceLevel",
                             "height": 464
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 46.47,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_0F0F5FEB_012C_0D03_413F_491678EFB33A",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "yaw": -62.65,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_2_0_map.gif",
                             "width": 35,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 32.23,
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 46.47
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "data": {
                         "label": "12"
                        },
                        "items": [
                         {
                          "pitch": -4.09,
                          "image": {
                           "colCount": 4,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_0_HS_3_0.png",
                             "width": 800,
                             "class": "ImageResourceLevel",
                             "height": 1200
                            }
                           ],
                           "frameDuration": 33,
                           "rowCount": 6,
                           "class": "AnimatedImageResource"
                          },
                          "hfov": 11.78,
                          "yaw": -144.95,
                          "distance": 100,
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_0F0EBFEB_012C_0D03_4160_861F4F28781F",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73, this.camera_73A1CF19_634E_CB28_41CD_835C7762158A); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": []
                       }
                      ]
                     }
                    ],
                    "hfovMax": 130,
                    "adjacentPanoramas": [
                     {
                      "yaw": -144.95,
                      "panorama": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
                      "distance": 1,
                      "backwardYaw": 148.2,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068"
                     }
                    ],
                    "id": "panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2",
                    "hfovMin": 60,
                    "vfov": 180,
                    "pitch": 0,
                    "label": "R0010043 \u2014 \u043a\u043e\u043f\u0438\u044f",
                    "hfov": 360,
                    "partial": false,
                    "class": "Panorama"
                   },
                   "distance": 1,
                   "backwardYaw": -144.95,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "id": "panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
                 "hfovMin": 60,
                 "vfov": 180,
                 "pitch": 0,
                 "label": "R0010043",
                 "hfov": 360,
                 "partial": false,
                 "class": "Panorama"
                }
               },
               {
                "yaw": 14.59,
                "panorama": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
                "distance": 1,
                "backwardYaw": 173.2,
                "class": "AdjacentPanorama"
               }
              ],
              "id": "panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
              "hfovMin": 60,
              "vfov": 180,
              "pitch": 0,
              "label": "R0010041",
              "hfov": 360,
              "partial": false,
              "class": "Panorama"
             },
             "distance": 1,
             "backwardYaw": 14.59,
             "class": "AdjacentPanorama"
            },
            {
             "yaw": 155.7,
             "panorama": {
              "thumbnailUrl": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_t.jpg",
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_hq.jpeg",
                   "width": 6720,
                   "class": "ImageResourceLevel",
                   "height": 3360
                  },
                  {
                   "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -35.71,
                    "image": {
                     "colCount": 4,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_0_HS_0_0.png",
                       "width": 400,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ],
                     "frameDuration": 33,
                     "rowCount": 6,
                     "class": "AnimatedImageResource"
                    },
                    "hfov": 18.39,
                    "yaw": -103.06,
                    "distance": 100,
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_9960F799_8F23_17D8_41DA_18044BBCAF27",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_739D7EFE_634E_CAE8_41D6_043B992A9750); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": []
                 }
                ]
               }
              ],
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "yaw": -103.06,
                "panorama": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
                "distance": 1,
                "backwardYaw": 155.7,
                "class": "AdjacentPanorama"
               }
              ],
              "id": "panorama_5C7306CE_568A_8318_41AE_148542B578B5",
              "hfovMin": 60,
              "vfov": 180,
              "pitch": 0,
              "label": "R0010058",
              "hfov": 360,
              "partial": false,
              "class": "Panorama"
             },
             "distance": 1,
             "backwardYaw": -103.06,
             "class": "AdjacentPanorama"
            },
            {
             "yaw": 77.13,
             "panorama": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
             "distance": 1,
             "backwardYaw": -52.54,
             "class": "AdjacentPanorama"
            }
           ],
           "id": "panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
           "hfovMin": 60,
           "vfov": 180,
           "pitch": 0,
           "label": "R0010040",
           "hfov": 360,
           "partial": false,
           "class": "Panorama"
          },
          "distance": 1,
          "backwardYaw": 77.13,
          "class": "AdjacentPanorama"
         }
        ],
        "id": "panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
        "hfovMin": 60,
        "vfov": 180,
        "pitch": 0,
        "label": "R0010039",
        "hfov": 360,
        "partial": false,
        "class": "Panorama"
       },
       "distance": 1,
       "backwardYaw": 108.76,
       "class": "AdjacentPanorama"
      }
     ],
     "id": "panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
     "hfovMin": 60,
     "vfov": 180,
     "pitch": 0,
     "label": "R0010038",
     "hfov": 360,
     "partial": false,
     "class": "Panorama"
    },
    "distance": 1,
    "backwardYaw": 111.43,
    "class": "AdjacentPanorama"
   }
  ],
  "id": "panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
  "hfovMin": 60,
  "vfov": 180,
  "pitch": 0,
  "label": "R0010037",
  "hfov": 360,
  "partial": false,
  "class": "Panorama"
 },
 {
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "id": "panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
 {
  "id": "panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
 {
  "id": "panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
 {
  "id": "panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
 {
  "id": "panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
 {
  "manualRotationSpeed": 1700,
  "id": "panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
 {
  "id": "panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
 {
  "id": "panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
 {
  "id": "panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
 {
  "id": "panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
 {
  "id": "panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
 {
  "id": "panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
 {
  "id": "panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
 {
  "id": "panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
 {
  "id": "panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
 {
  "id": "panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
 {
  "id": "panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
 {
  "id": "panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF",
 {
  "id": "panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2",
 {
  "id": "panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_114B085F_0164_3303_4162_FBA5833CE7CA",
 {
  "id": "panorama_114B085F_0164_3303_4162_FBA5833CE7CA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
    "camera": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
    "camera": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
    "camera": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
    "camera": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
    "camera": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
    "camera": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
    "camera": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
    "camera": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
    "camera": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
    "camera": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
    "camera": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
    "camera": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
    "camera": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
    "camera": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
    "camera": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
    "camera": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
    "camera": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
    "camera": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF",
    "camera": "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2",
    "camera": "this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "media": "this.panorama_114B085F_0164_3303_4162_FBA5833CE7CA",
    "camera": "this.panorama_114B085F_0164_3303_4162_FBA5833CE7CA_camera"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 0, 1)",
    "media": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
    "camera": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 1, 2)",
    "media": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
    "camera": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 2, 3)",
    "media": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
    "camera": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 3, 4)",
    "media": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
    "camera": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 4, 5)",
    "media": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
    "camera": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 5, 6)",
    "media": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
    "camera": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 6, 7)",
    "media": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
    "camera": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 7, 8)",
    "media": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
    "camera": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 8, 9)",
    "media": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
    "camera": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 9, 10)",
    "media": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
    "camera": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 10, 11)",
    "media": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
    "camera": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 11, 12)",
    "media": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
    "camera": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 12, 13)",
    "media": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
    "camera": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 13, 14)",
    "media": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
    "camera": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 14, 15)",
    "media": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
    "camera": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 15, 16)",
    "media": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
    "camera": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 16, 17)",
    "media": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
    "camera": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 17, 18)",
    "media": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
    "camera": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 18, 19)",
    "media": "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF",
    "camera": "this.panorama_C604B39B_D7DE_D885_41E7_E8787DC58FBF_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 19, 20)",
    "media": "this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2",
    "camera": "this.panorama_0CDB9CF7_012D_F303_4161_5C224CE8B1F2_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist, 20, 0)",
    "media": "this.panorama_114B085F_0164_3303_4162_FBA5833CE7CA",
    "camera": "this.panorama_114B085F_0164_3303_4162_FBA5833CE7CA_camera",
    "class": "PanoramaPlayListItem"
   }
  ],
  "class": "PlayList"
 },
 {
  "titleFontWeight": "normal",
  "data": {
   "name": "Window21028"
  },
  "borderSize": 0,
  "creationPolicy": "delayed",
  "bodyPaddingTop": 5,
  "backgroundColor": [],
  "titleFontStyle": "normal",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "footerBackgroundColorDirection": "vertical",
  "minWidth": 20,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconWidth": 12,
  "modal": true,
  "bodyPaddingRight": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "titleTextDecoration": "none",
  "bodyBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "title": "\u0432\u0430\u043f\u0432\u0430\u043f\u0432\u0430\u0432\u0430\u043f",
  "closeButtonIconLineWidth": 2,
  "bodyPaddingLeft": 5,
  "headerPaddingRight": 10,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "footerHeight": 5,
  "shadow": true,
  "closeButtonIconHeight": 12,
  "paddingRight": 0,
  "shadowColor": "#000000",
  "titlePaddingRight": 5,
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingTop": 10,
  "titleFontColor": "#000000",
  "titlePaddingLeft": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "class": "Window",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "class": "HTMLText",
    "minWidth": 0,
    "scrollBarMargin": 2,
    "width": "100%",
    "paddingLeft": 10,
    "paddingTop": 10,
    "height": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.11vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.11vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minHeight": 0,
    "scrollBarColor": "#000000",
    "shadow": false,
    "id": "htmlText_uid73457E74_634E_CDF8_41D0_FC411700BBEB",
    "paddingRight": 10,
    "borderRadius": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "propagateClick": false,
    "data": {
     "name": "HTMLText10120"
    }
   }
  ],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#000000",
  "shadowSpread": 1,
  "headerVerticalAlign": "middle",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColorDirection": "vertical",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "scrollBarMargin": 2,
  "headerBorderSize": 0,
  "width": 400,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "height": 600,
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "layout": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontSize": 0,
  "gap": 10,
  "headerBackgroundOpacity": 1,
  "overflow": "scroll",
  "veilColorDirection": "horizontal",
  "scrollBarOpacity": 0.5,
  "shadowHorizontalLength": 3,
  "titleFontFamily": "Arial",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "minHeight": 20,
  "id": "window_6ED89A49_7D3A_76D0_41DB_3393D9DBA78B",
  "closeButtonBackgroundColor": [],
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "shadowBlurRadius": 6,
  "propagateClick": false,
  "closeButtonIconColor": "#000000",
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "bodyPaddingBottom": 5
 },
 {
  "id": "camera_736F7E87_634E_CD18_419D_8AE179EF6556",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 173.4,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73647E8E_634E_CD28_41D0_61A731E860C4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -160.2,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7318BE96_634E_CD38_41C5_C399FAA40284",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 70.76,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_731EEE9D_634E_CD28_41D3_3F50DA54F64A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 119.15,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73135EA5_634E_CD18_41CA_6DEC3295D4F4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -71.24,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_730A8EAD_634E_CD68_41A4_C5AAA2910CD6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -169.46,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73021EB3_634E_CD78_41D5_FE8F8B355321",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -149.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73397EB9_634E_CD68_41D2_4D871217F508",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -68.57,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7331CEC0_634E_CD18_41D3_A8EF4CAFB602",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 119.15,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7328DEC7_634E_CD18_41AC_E97ACC1599F7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 28.9,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7321BECE_634E_CD28_41CF_C2A93BB27899",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -165.41,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73D9DED5_634E_CD38_41B3_BBE54D00AE42",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 76.94,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73D55EDC_634E_CD28_4193_DDFBE19E093C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 127.46,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73C0CEE2_634E_CD18_41CE_4F0A6448474C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 114.01,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73FACEE9_634E_CAE8_418A_F52009E8BF7D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -102.87,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73F64EF0_634E_CAF8_41D2_91973D0B0731",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 14.81,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73E12EF7_634E_CAF8_41D4_C604A6F0C5C4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -6.8,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_739D7EFE_634E_CAE8_41D6_043B992A9750",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -24.3,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73889F05_634E_CB18_415C_ABC100E7EF48",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -163.97,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73865F0C_634E_CB28_41D1_D00408E12E9C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -134.12,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_73B4FF12_634E_CB38_41D2_2075247659C3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -40.77,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "manualRotationSpeed": 1700,
  "id": "camera_73A1CF19_634E_CB28_41CD_835C7762158A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -31.8,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72501F20_634E_CB18_41B1_EDB14E6034F3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 20.3,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_724DBF27_634E_CB18_41D3_7B1D61FFE03A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 35.05,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_727BCF2D_634E_CB68_41D7_E0626B424928",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 111.95,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72695F3E_634E_CB68_41BD_EFC8EE4F6F9E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 160.34,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72180F4A_634E_CB28_41B6_604CD6FF849B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -141.86,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72168F56_634E_CB38_41CF_08B37C378B6D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -148.88,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "manualRotationSpeed": 1700,
  "id": "camera_72039F62_634E_CB18_41D0_334D4F1F787B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -151.62,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72321F6E_634E_CBE8_419B_4E7CEFDC47D1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 13.45,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_722F6F80_634E_CB18_41D0_966C844B9E6D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -158.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_72DE3F8C_634E_CB28_41D5_01F5ED4A00AE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 29.93,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipPaddingLeft": 20,
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "minWidth": 100,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipFontSize": "18px",
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderSize": 0,
  "progressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "shadow": false,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundOpacity": 1,
  "toolTipBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarRight": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadow": true,
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingRight": 20,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "playbackBarLeft": 0,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "width": "100%",
  "progressBorderColor": "#000000",
  "height": "100%",
  "playbackBarBorderSize": 0,
  "playbackBarBottom": 5,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingTop": 4,
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontColor": "#000000",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "toolTipBorderRadius": 10,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipShadowColor": "#333333",
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "progressLeft": 0,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBorderColor": "#000000",
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "scrollBarOpacity": 0.5,
  "left": 0,
  "borderSize": 0,
  "class": "Container",
  "children": [
   {
    "itemBackgroundColorDirection": "vertical",
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailShadowHorizontalLength": 3,
    "borderSize": 0,
    "backgroundColorDirection": "vertical",
    "class": "ThumbnailList",
    "backgroundColor": [
     "#000000"
    ],
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailOpacity": 1,
    "itemOpacity": 1,
    "minWidth": 0,
    "itemLabelFontColor": "#FFFFFF",
    "maxHeight": 600,
    "itemLabelFontFamily": "Arial",
    "itemHorizontalAlign": "center",
    "scrollBarMargin": 2,
    "paddingLeft": 20,
    "itemLabelGap": 5,
    "paddingTop": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailHeight": 75,
    "layout": "horizontal",
    "itemLabelPosition": "bottom",
    "itemLabelTextDecoration": "none",
    "itemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "itemBackgroundColorRatios": [],
    "itemLabelFontWeight": "normal",
    "itemMode": "normal",
    "itemBorderRadius": 0,
    "itemThumbnailShadow": true,
    "gap": 10,
    "itemLabelFontStyle": "normal",
    "itemPaddingTop": 3,
    "itemLabelFontSize": 14,
    "scrollBarOpacity": 0.5,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelFontWeight": "bold",
    "playList": "this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist",
    "itemPaddingRight": 3,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "itemVerticalAlign": "middle",
    "itemThumbnailBorderRadius": 5,
    "verticalAlign": "top",
    "scrollBarColor": "#FFFFFF",
    "minHeight": 0,
    "id": "component_D390173A_C3E7_2529_41D9_E29C50F78505",
    "data": {
     "name": "ThumbnailList549"
    },
    "scrollBarWidth": 10,
    "paddingRight": 20,
    "itemThumbnailWidth": 100,
    "shadow": false,
    "paddingBottom": 10,
    "itemPaddingBottom": 3,
    "propagateClick": false,
    "backgroundOpacity": 0.2,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowSpread": 1,
    "borderRadius": 5,
    "itemThumbnailShadowOpacity": 0.8,
    "maxWidth": 800,
    "itemPaddingLeft": 3
   }
  ],
  "contentOpaque": false,
  "right": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "height": 200,
  "layout": "horizontal",
  "paddingTop": 0,
  "gap": 10,
  "overflow": "visible",
  "bottom": 0,
  "minHeight": 20,
  "verticalAlign": "bottom",
  "scrollBarColor": "#000000",
  "shadow": false,
  "id": "component_D3909739_C3E7_252B_41E4_3F0E1AFDF69C",
  "data": {
   "name": "Container548"
  },
  "paddingRight": 0,
  "borderRadius": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "propagateClick": false,
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "delayed"
 }
], 
 "scrollBarOpacity": 0.5,
 "creationPolicy": "delayed",
 "backgroundPreloadEnabled": true,
 "start": "this.syncPlaylists([this.component_D390173A_C3E7_2529_41D9_E29C50F78505_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "class": "Player",
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "width": "100%",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "overflow": "visible",
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "shadow": false,
 "paddingRight": 0,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player546"
 }
})