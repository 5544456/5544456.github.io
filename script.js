TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE, this.camera_93B46390_9EB7_3023_41C2_0350F71E75F3); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -11,
        "yaw": -60.85,
        "image": {
         "class": "AnimatedImageResource",
         "frameDuration": 33,
         "colCount": 4,
         "rowCount": 6,
         "frameCount": 24,
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_0_HS_0_0.png",
           "width": 400,
           "height": 360
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.23,
        "distance": 100
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_6B171B70_6687_8005_418B_F4B5FDBAA760",
      "maps": [],
      "useHandCursor": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_hq.jpeg",
       "width": 6720,
       "height": 3360
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "height": 1024
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -60.85,
    "backwardYaw": 111.43,
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C, this.camera_9270F366_9EB7_30EF_41D6_600A5D5F4BD3); this.mainPlayList.set('selectedIndex', 2)"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -8.25,
           "yaw": -65.99,
           "image": {
            "class": "AnimatedImageResource",
            "frameDuration": 33,
            "colCount": 4,
            "rowCount": 6,
            "frameCount": 24,
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_0_0.png",
              "width": 400,
              "height": 360
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 22.42,
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_68DDC552_668A_800A_41C7_992CEA5C59FD",
         "maps": [],
         "useHandCursor": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "\u041d\u0430\u0436\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c",
           "displayTooltipInTouchScreens": true,
           "mapColor": "image",
           "click": "this.showWindow(this.window_75406903_7B0B_B250_41C2_BD7D1D269B1F, null, false)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 4.34,
           "yaw": -107.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_1_0.png",
              "width": 171,
              "height": 207
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.13,
           "distance": 100
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_76419C09_7B09_9251_41D5_A9C4FD6AB76D",
         "maps": [],
         "useHandCursor": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134, this.camera_927A936D_9EB7_30FD_41D6_B5223F03E879); this.mainPlayList.set('selectedIndex', 0)"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -17.52,
           "yaw": 111.43,
           "image": {
            "class": "AnimatedImageResource",
            "frameDuration": 33,
            "colCount": 4,
            "rowCount": 6,
            "frameCount": 24,
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_0_HS_2_0.png",
              "width": 400,
              "height": 360
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 21.6,
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_8209E736_8F23_68E8_41D6_531D8B8F86ED",
         "maps": [],
         "useHandCursor": true
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_hq.jpeg",
          "width": 6720,
          "height": 3360
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "height": 1024
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       }
      }
     ],
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -65.99,
       "backwardYaw": 108.76,
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_922D734C_9EB7_3023_41D0_D4FE4AFAAB0A); this.mainPlayList.set('selectedIndex', 3)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -17.45,
              "yaw": -52.54,
              "image": {
               "class": "AnimatedImageResource",
               "frameDuration": 33,
               "colCount": 4,
               "rowCount": 6,
               "frameCount": 24,
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_0_HS_0_0.png",
                 "width": 400,
                 "height": 360
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 28.94,
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_686EEDAE_668B_801B_41D6_090BA3D565E6",
            "maps": [],
            "useHandCursor": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE, this.camera_923B3345_9EB7_302D_41D1_CC630771B8D4); this.mainPlayList.set('selectedIndex', 1)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -22.26,
              "yaw": 108.76,
              "image": {
               "class": "AnimatedImageResource",
               "frameDuration": 33,
               "colCount": 4,
               "rowCount": 6,
               "frameCount": 24,
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_0_HS_1_0.png",
                 "width": 400,
                 "height": 360
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 28.08,
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_81016A30_8F21_18E8_41D2_2E020E3EA655",
            "maps": [],
            "useHandCursor": true
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_hq.jpeg",
             "width": 6720,
             "height": 3360
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "height": 1024
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          }
         }
        ],
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 108.76,
          "backwardYaw": -65.99,
          "distance": 1,
          "panorama": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE"
         },
         {
          "class": "AdjacentPanorama",
          "yaw": -52.54,
          "backwardYaw": 77.13,
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13, this.camera_92E5531F_9EB7_305D_41E1_443F4D205227); this.mainPlayList.set('selectedIndex', 4)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -9.97,
                 "yaw": 173.2,
                 "image": {
                  "class": "AnimatedImageResource",
                  "frameDuration": 33,
                  "colCount": 4,
                  "rowCount": 6,
                  "frameCount": 24,
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_0_0.png",
                    "width": 400,
                    "height": 360
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 22.31,
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_69C4F972_668A_8005_41D3_938CE9D4E60C",
               "maps": [],
               "useHandCursor": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "\u041d\u0430\u0436\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "image",
                 "click": "this.showWindow(this.window_755358F1_7B16_B3B0_41BE_9F126F6621C0, null, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -6.3,
                 "yaw": -52.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_1_0.png",
                    "width": 181,
                    "height": 207
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.65,
                 "distance": 100
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_75614924_7B16_B250_41DB_42ED9739FB2C",
               "maps": [],
               "useHandCursor": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C, this.camera_92EFB325_9EB7_306D_41C6_1A228A9A9A85); this.mainPlayList.set('selectedIndex', 2)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -14.36,
                 "yaw": 77.13,
                 "image": {
                  "class": "AnimatedImageResource",
                  "frameDuration": 33,
                  "colCount": 4,
                  "rowCount": 6,
                  "frameCount": 24,
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_2_0.png",
                    "width": 400,
                    "height": 360
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 26.46,
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_82F8F7F0_8F21_1769_41CA_DCFE5D5DF65C",
               "maps": [],
               "useHandCursor": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C7306CE_568A_8318_41AE_148542B578B5, this.camera_92D1132B_9EB7_3065_41B4_84B4B4535A40); this.mainPlayList.set('selectedIndex', 17)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -8.6,
                 "yaw": 155.7,
                 "image": {
                  "class": "AnimatedImageResource",
                  "frameDuration": 33,
                  "colCount": 4,
                  "rowCount": 6,
                  "frameCount": 24,
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_0_HS_3_0.png",
                    "width": 400,
                    "height": 360
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 22.4,
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_9742E028_8FE1_68F9_41C1_3A74A3599E37",
               "maps": [],
               "useHandCursor": true
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_hq.jpeg",
                "width": 6720,
                "height": 3360
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_lq.jpeg",
                "width": 2048,
                "tags": "preload",
                "height": 1024
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             }
            }
           ],
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "yaw": 173.2,
             "backwardYaw": 14.59,
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "data": {
                   "label": "12"
                  },
                  "items": [
                   {
                    "pitch": -3.1,
                    "yaw": -153.88,
                    "image": {
                     "class": "AnimatedImageResource",
                     "frameDuration": 33,
                     "colCount": 4,
                     "rowCount": 6,
                     "frameCount": 24,
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_0_HS_0_0.png",
                       "width": 800,
                       "height": 1200
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.72,
                    "distance": 100
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_69E37B44_668A_800E_41BA_5E26BD653AC2",
                  "maps": [],
                  "useHandCursor": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_92ACB2FE_9EB7_31DF_41C5_F0DEF4C5E78C); this.mainPlayList.set('selectedIndex', 3)"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -18.29,
                    "yaw": 14.59,
                    "image": {
                     "class": "AnimatedImageResource",
                     "frameDuration": 33,
                     "colCount": 4,
                     "rowCount": 6,
                     "frameCount": 24,
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_0_HS_1_0.png",
                       "width": 400,
                       "height": 360
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 22.03,
                    "distance": 100
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_82C4AC33_8F21_38E8_41CD_8581536EE391",
                  "maps": [],
                  "useHandCursor": true
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_hq.jpeg",
                   "width": 6720,
                   "height": 3360
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_lq.jpeg",
                   "width": 2048,
                   "tags": "preload",
                   "height": 1024
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                }
               }
              ],
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068, this.camera_93E463D8_9EB7_3023_41DF_F2B01FAD7515); this.mainPlayList.set('selectedIndex', 6)"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -15.12,
                       "yaw": 28.38,
                       "image": {
                        "class": "AnimatedImageResource",
                        "frameDuration": 33,
                        "colCount": 4,
                        "rowCount": 6,
                        "frameCount": 24,
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_0_0.png",
                          "width": 400,
                          "height": 360
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 21.87,
                       "distance": 100
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_760B0FFC_668A_FFFD_41D0_61150A2962E6",
                     "maps": [],
                     "useHandCursor": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "data": {
                      "label": "Polygon"
                     },
                     "items": [
                      {
                       "pitch": 31.24,
                       "yaw": -62.97,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_6_0.png",
                          "width": 1057,
                          "height": 402
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 52.62,
                       "distance": 0.25,
                       "roll": 0
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A3CFF26_7B1E_6E50_41DB_8C008F15A1AC",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -62.97,
                       "hfov": 52.62,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_6_1_0_map.gif",
                          "width": 200,
                          "height": 76
                         }
                        ]
                       },
                       "pitch": 31.24
                      }
                     ],
                     "useHandCursor": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "data": {
                      "label": "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                     },
                     "items": [
                      {
                       "pitch": 32.22,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_7_0.png",
                          "width": 1025,
                          "height": 464
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -62.13,
                       "hfov": 46.48,
                       "distance": 100
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A4B43BD_7B16_95B1_41C2_240C81378546",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -62.13,
                       "hfov": 46.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_7_0_map.gif",
                          "width": 35,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 32.22
                      }
                     ],
                     "useHandCursor": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "data": {
                      "label": "12"
                     },
                     "items": [
                      {
                       "pitch": -2.34,
                       "yaw": -144.68,
                       "image": {
                        "class": "AnimatedImageResource",
                        "frameDuration": 33,
                        "colCount": 4,
                        "rowCount": 6,
                        "frameCount": 24,
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_0_HS_8_0.png",
                          "width": 800,
                          "height": 1200
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.8,
                       "distance": 0.25
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_8193D953_8F27_38AF_41D4_9B5A0784E58C",
                     "maps": [],
                     "useHandCursor": true
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_hq.jpeg",
                      "width": 6720,
                      "height": 3360
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_lq.jpeg",
                      "width": 2048,
                      "tags": "preload",
                      "height": 1024
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMax": 130,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "yaw": 28.38,
                   "backwardYaw": -159.7,
                   "distance": 1,
                   "panorama": {
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_5C70F16F_568A_8118_41CE_4D314702C266, this.camera_92CF7338_9EB7_3063_41DC_791253A6FE45); this.mainPlayList.set('selectedIndex', 7)"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "items": [
                         {
                          "pitch": -9.97,
                          "yaw": 19.8,
                          "image": {
                           "class": "AnimatedImageResource",
                           "frameDuration": 33,
                           "colCount": 4,
                           "rowCount": 6,
                           "frameCount": 24,
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_0_0.png",
                             "width": 400,
                             "height": 360
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 22.31,
                          "distance": 100
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_768373CB_6689_801A_41CA_F3BB707A74F5",
                        "maps": [],
                        "useHandCursor": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "data": {
                         "label": "Polygon"
                        },
                        "items": [
                         {
                          "pitch": 36.79,
                          "yaw": -64.18,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_1_0.png",
                             "width": 953,
                             "height": 460
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 48.03,
                          "distance": 0.25,
                          "roll": 0
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6AB2ADB8_7B36_ADB0_41D0_1D25AD06D31B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -64.18,
                          "hfov": 48.03,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_1_1_0_map.gif",
                             "width": 200,
                             "height": 96
                            }
                           ]
                          },
                          "pitch": 36.79
                         }
                        ],
                        "useHandCursor": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
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
                        "data": {
                         "label": "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                        },
                        "items": [
                         {
                          "pitch": 37.36,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_2_0.png",
                             "width": 999,
                             "height": 464
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -63.19,
                          "hfov": 42.54,
                          "distance": 100
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6AB2BDB9_7B36_ADB0_41C6_E2D289F014BC",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -63.19,
                          "hfov": 42.54,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_2_0_map.gif",
                             "width": 34,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 37.36
                         }
                        ],
                        "useHandCursor": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73, this.camera_92DA5332_9EB7_3067_41A1_028308C039A1); this.mainPlayList.set('selectedIndex', 5)"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         },
                         {
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "items": [
                         {
                          "pitch": -17.18,
                          "yaw": -159.7,
                          "image": {
                           "class": "AnimatedImageResource",
                           "frameDuration": 33,
                           "colCount": 4,
                           "rowCount": 6,
                           "frameCount": 24,
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_0_HS_3_0.png",
                             "width": 400,
                             "height": 360
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 21.64,
                          "distance": 100
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_9D7BB172_8F63_2B69_41A3_4EB339B872D7",
                        "maps": [],
                        "useHandCursor": true
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_hq.jpeg",
                         "width": 6720,
                         "height": 3360
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_lq.jpeg",
                         "width": 2048,
                         "tags": "preload",
                         "height": 1024
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 130,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -159.7,
                      "backwardYaw": 28.38,
                      "distance": 1,
                      "panorama": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": 19.8,
                      "backwardYaw": -166.55,
                      "distance": 1,
                      "panorama": {
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A, this.camera_921B635A_9EB7_3027_41B9_98BF406E6738); this.mainPlayList.set('selectedIndex', 8)"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "items": [
                            {
                             "pitch": -11.34,
                             "yaw": 10.54,
                             "image": {
                              "class": "AnimatedImageResource",
                              "frameDuration": 33,
                              "colCount": 4,
                              "rowCount": 6,
                              "frameCount": 24,
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_0_0.png",
                                "width": 400,
                                "height": 360
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 22.21,
                             "distance": 100
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76B14432_6686_800A_41C4_1F12B7714E91",
                           "maps": [],
                           "useHandCursor": true
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "data": {
                            "label": "Polygon"
                           },
                           "items": [
                            {
                             "pitch": 37.85,
                             "yaw": -78.42,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_1_0.png",
                                "width": 990,
                                "height": 392
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 49.71,
                             "distance": 0.25,
                             "roll": 0
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_69C8A16D_7AF9_92D0_41D5_43A3EB03C8DF",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -78.42,
                             "hfov": 49.71,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_1_1_0_map.gif",
                                "width": 200,
                                "height": 79
                               }
                              ]
                             },
                             "pitch": 37.85
                            }
                           ],
                           "useHandCursor": true
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
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
                           "data": {
                            "label": "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                           },
                           "items": [
                            {
                             "pitch": 38.36,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_2_0.png",
                                "width": 1043,
                                "height": 440
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -77.09,
                             "hfov": 43.85,
                             "distance": 100
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_69C8B16D_7AF9_92D0_41D1_829A06131F27",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -77.09,
                             "hfov": 43.85,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_2_0_map.gif",
                                "width": 37,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 38.36
                            }
                           ],
                           "useHandCursor": true
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068, this.camera_92169353_9EB7_3025_41C8_388634F2732E); this.mainPlayList.set('selectedIndex', 6)"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "items": [
                            {
                             "pitch": -19.58,
                             "yaw": -166.55,
                             "image": {
                              "class": "AnimatedImageResource",
                              "frameDuration": 33,
                              "colCount": 4,
                              "rowCount": 6,
                              "frameCount": 24,
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_0_HS_3_0.png",
                                "width": 400,
                                "height": 360
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 21.34,
                             "distance": 100
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_9D2CAA99_8F61_79D8_41B0_1F66A625A1C9",
                           "maps": [],
                           "useHandCursor": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_hq.jpeg",
                            "width": 6720,
                            "height": 3360
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_lq.jpeg",
                            "width": 2048,
                            "tags": "preload",
                            "height": 1024
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266.jpeg",
                            "width": 4002,
                            "height": 2001
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 130,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": -166.55,
                         "backwardYaw": 19.8,
                         "distance": 1,
                         "panorama": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 10.54,
                         "backwardYaw": -109.24,
                         "distance": 1,
                         "panorama": {
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_hq.jpeg",
                               "width": 6720,
                               "height": 3360
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_lq.jpeg",
                               "width": 2048,
                               "tags": "preload",
                               "height": 1024
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A.jpeg",
                               "width": 4002,
                               "height": 2001
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "\u0432\u043f\u044b\u0430\u043f\u044b\u0430\u043f\u044b\u043f\u0432\u0430\u043f",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "image",
                                "click": "this.showWindow(this.window_6ED89A49_7D3A_76D0_41DB_3393D9DBA78B, null, false)"
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "items": [
                               {
                                "pitch": 1.39,
                                "yaw": -10.47,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_0_0.png",
                                   "width": 192,
                                   "height": 192
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 10.29,
                                "distance": 100
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_77877D76_6686_800A_41D6_FC51F9295C17",
                              "maps": [],
                              "useHandCursor": true
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC, this.camera_9250A379_9EB7_30E5_41C1_19AE3F50FEA6); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "data": {
                               "label": "12"
                              },
                              "items": [
                               {
                                "pitch": -4.83,
                                "yaw": 39.64,
                                "image": {
                                 "class": "AnimatedImageResource",
                                 "frameDuration": 55,
                                 "colCount": 4,
                                 "rowCount": 6,
                                 "frameCount": 24,
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_1_0.png",
                                   "width": 800,
                                   "height": 1200
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 17.24,
                                "distance": 100
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_779BDD95_669A_800F_41BB_5AE690F49905",
                              "maps": [],
                              "useHandCursor": true
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "data": {
                               "label": "Polygon"
                              },
                              "items": [
                               {
                                "pitch": 34.86,
                                "yaw": -19.05,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_2_0.png",
                                   "width": 899,
                                   "height": 400
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 45.61,
                                "distance": 0.25,
                                "roll": 0
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6973F0F9_7AFA_73B0_4197_FD3D7CAE9E6B",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -19.05,
                                "hfov": 45.61,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_2_1_0_map.gif",
                                   "width": 200,
                                   "height": 89
                                  }
                                 ]
                                },
                                "pitch": 34.86
                               }
                              ],
                              "useHandCursor": true
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
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
                              "data": {
                               "label": "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u000d   \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"
                              },
                              "items": [
                               {
                                "pitch": 34.44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_3_0.png",
                                   "width": 1012,
                                   "height": 471
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -17.86,
                                "hfov": 44.72,
                                "distance": 100
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6973E0F9_7AFA_73B0_41DA_7286E83AA6B9",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -17.86,
                                "hfov": 44.72,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_3_0_map.gif",
                                   "width": 34,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 34.44
                               }
                              ],
                              "useHandCursor": true
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_5C70F16F_568A_8118_41CE_4D314702C266, this.camera_926ED373_9EB7_30E5_41DD_4A33298AF9B9); this.mainPlayList.set('selectedIndex', 7)"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "items": [
                               {
                                "pitch": -18.21,
                                "yaw": -109.24,
                                "image": {
                                 "class": "AnimatedImageResource",
                                 "frameDuration": 33,
                                 "colCount": 4,
                                 "rowCount": 6,
                                 "frameCount": 24,
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_0_HS_4_0.png",
                                   "width": 400,
                                   "height": 360
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 21.52,
                                "distance": 100
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_9EA09761_8F66_F76B_41BE_9C8E01A712F0",
                              "maps": [],
                              "useHandCursor": true
                             }
                            ]
                           }
                          ],
                          "hfovMax": 130,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": -109.24,
                            "backwardYaw": 10.54,
                            "distance": 1,
                            "panorama": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "yaw": 39.64,
                            "backwardYaw": 30.44,
                            "distance": 1,
                            "panorama": {
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5, this.camera_93D503E0_9EB7_37E3_41C6_528AAF426F80); this.mainPlayList.set('selectedIndex', 10)"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "items": [
                                  {
                                   "pitch": -18.55,
                                   "yaw": -150.07,
                                   "image": {
                                    "class": "AnimatedImageResource",
                                    "frameDuration": 33,
                                    "colCount": 4,
                                    "rowCount": 6,
                                    "frameCount": 24,
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_0_0.png",
                                      "width": 400,
                                      "height": 360
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 21.47,
                                   "distance": 100
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_7655B0FB_669B_81FA_41D9_26C1393348A2",
                                 "maps": [],
                                 "useHandCursor": true
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A, this.camera_93D833E7_9EB7_37ED_41C8_FEEE23920110); this.mainPlayList.set('selectedIndex', 8)"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "items": [
                                  {
                                   "pitch": -20.61,
                                   "yaw": 30.44,
                                   "image": {
                                    "class": "AnimatedImageResource",
                                    "frameDuration": 33,
                                    "colCount": 4,
                                    "rowCount": 6,
                                    "frameCount": 24,
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_0_HS_1_0.png",
                                      "width": 400,
                                      "height": 360
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 21.2,
                                   "distance": 100
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_9A0B060A_8F21_68B8_41DB_F0D63790F871",
                                 "maps": [],
                                 "useHandCursor": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_hq.jpeg",
                                  "width": 6720,
                                  "height": 3360
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_lq.jpeg",
                                  "width": 2048,
                                  "tags": "preload",
                                  "height": 1024
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC.jpeg",
                                  "width": 4002,
                                  "height": 2001
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMax": 130,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "yaw": -150.07,
                               "backwardYaw": 31.13,
                               "distance": 1,
                               "panorama": {
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997, this.camera_929D4305_9EB7_302D_41E3_185FE9861420); this.mainPlayList.set('selectedIndex', 11)"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -16.49,
                                      "yaw": -151.1,
                                      "image": {
                                       "class": "AnimatedImageResource",
                                       "frameDuration": 33,
                                       "colCount": 4,
                                       "rowCount": 6,
                                       "frameCount": 24,
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_0_0.png",
                                         "width": 400,
                                         "height": 360
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.72,
                                      "distance": 100
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_77D8D647_669A_8009_41BC_2B0D079A73FC",
                                    "maps": [],
                                    "useHandCursor": true
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC, this.camera_9287D30C_9EB7_3023_41CD_27EE5A83645B); this.mainPlayList.set('selectedIndex', 9)"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "Image"
                                    },
                                    "items": [
                                     {
                                      "pitch": -21.29,
                                      "yaw": 31.13,
                                      "image": {
                                       "class": "AnimatedImageResource",
                                       "frameDuration": 33,
                                       "colCount": 4,
                                       "rowCount": 6,
                                       "frameCount": 24,
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_0_HS_1_0.png",
                                         "width": 400,
                                         "height": 360
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.1,
                                      "distance": 100
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9AD7A216_8F21_E8A8_41D2_A62D3B800C0E",
                                    "maps": [],
                                    "useHandCursor": true
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_hq.jpeg",
                                     "width": 6720,
                                     "height": 3360
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_lq.jpeg",
                                     "width": 2048,
                                     "tags": "preload",
                                     "height": 1024
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "hfovMax": 130,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": -151.1,
                                  "backwardYaw": 23.23,
                                  "distance": 1,
                                  "panorama": {
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_t.jpg",
                                     "overlays": [
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.mainPlayList.set('selectedIndex', 12)"
                                        }
                                       ],
                                       "data": {
                                        "label": "12"
                                       },
                                       "items": [
                                        {
                                         "pitch": -4.26,
                                         "yaw": -149.25,
                                         "image": {
                                          "class": "AnimatedImageResource",
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "rowCount": 6,
                                          "frameCount": 24,
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_0_0.png",
                                            "width": 800,
                                            "height": 1200
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 13.7,
                                         "distance": 100
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_77569671_6699_8006_41AF_F8271728E74A",
                                       "maps": [],
                                       "useHandCursor": true
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5, this.camera_93AE03A7_9EB7_306D_41B6_59C1F4F98CA5); this.mainPlayList.set('selectedIndex', 10)"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "Image"
                                       },
                                       "items": [
                                        {
                                         "pitch": -24.04,
                                         "yaw": 23.23,
                                         "image": {
                                          "class": "AnimatedImageResource",
                                          "frameDuration": 33,
                                          "colCount": 4,
                                          "rowCount": 6,
                                          "frameCount": 24,
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_0_HS_1_0.png",
                                            "width": 400,
                                            "height": 360
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 20.69,
                                         "distance": 100
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_99B8D78F_8F2F_77B8_41DA_A2C33C804CF9",
                                       "maps": [],
                                       "useHandCursor": true
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_hq.jpeg",
                                        "width": 6720,
                                        "height": 3360
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_lq.jpeg",
                                        "width": 2048,
                                        "tags": "preload",
                                        "height": 1024
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "hfovMax": 130,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "yaw": 23.23,
                                     "backwardYaw": -151.1,
                                     "distance": 1,
                                     "panorama": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_9247837F_9EB7_30DD_41E0_C43EED10237C); this.mainPlayList.set('selectedIndex', 13)"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "Image"
                                          },
                                          "items": [
                                           {
                                            "pitch": -19.24,
                                            "yaw": 16.03,
                                            "image": {
                                             "class": "AnimatedImageResource",
                                             "frameDuration": 33,
                                             "colCount": 4,
                                             "rowCount": 6,
                                             "frameCount": 24,
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_0_HS_0_0.png",
                                               "width": 400,
                                               "height": 360
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 21.39,
                                            "distance": 100
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_77491191_669E_8006_41D4_7895228F4C7B",
                                          "maps": [],
                                          "useHandCursor": true
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_hq.jpeg",
                                           "width": 6720,
                                           "height": 3360
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_lq.jpeg",
                                           "width": 2048,
                                           "tags": "preload",
                                           "height": 1024
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD.jpeg",
                                           "width": 4002,
                                           "height": 2001
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "yaw": 16.03,
                                        "backwardYaw": -165.19,
                                        "distance": 1,
                                        "panorama": {
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD, this.camera_93F7C3CC_9EB7_3023_41D3_323C89EB7E31); this.mainPlayList.set('selectedIndex', 12)"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -15.8,
                                               "yaw": -165.19,
                                               "image": {
                                                "class": "AnimatedImageResource",
                                                "frameDuration": 33,
                                                "colCount": 4,
                                                "rowCount": 6,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_0_0.png",
                                                  "width": 400,
                                                  "height": 360
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 21.79,
                                               "distance": 100
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_7765CCF4_6699_800D_41D0_23C1FAA3CA05",
                                             "maps": [],
                                             "useHandCursor": true
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76, this.camera_938003C0_9EB7_3023_41E2_09DECAD63617); this.mainPlayList.set('selectedIndex', 15)"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -8.25,
                                               "yaw": -19.66,
                                               "image": {
                                                "class": "AnimatedImageResource",
                                                "frameDuration": 33,
                                                "colCount": 4,
                                                "rowCount": 6,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_1_0.png",
                                                  "width": 400,
                                                  "height": 360
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 22.42,
                                               "distance": 100
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_75B655DC_6687_803E_41D2_657CE2602A20",
                                             "maps": [],
                                             "useHandCursor": true
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84, this.camera_939213B4_9EB7_3063_41D9_E9406A32E318); this.mainPlayList.set('selectedIndex', 14)"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "items": [
                                              {
                                               "pitch": -26.1,
                                               "yaw": -60.85,
                                               "image": {
                                                "class": "AnimatedImageResource",
                                                "frameDuration": 33,
                                                "colCount": 4,
                                                "rowCount": 6,
                                                "frameCount": 24,
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_0_HS_2_0.png",
                                                  "width": 400,
                                                  "height": 360
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 20.34,
                                               "distance": 100
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_72D6E12C_668A_801E_41CA_6133BDDE646B",
                                             "maps": [],
                                             "useHandCursor": true
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_hq.jpeg",
                                              "width": 6720,
                                              "height": 3360
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_lq.jpeg",
                                              "width": 2048,
                                              "tags": "preload",
                                              "height": 1024
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813.jpeg",
                                              "width": 4002,
                                              "height": 2001
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMax": 130,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "yaw": -60.85,
                                           "backwardYaw": 45.88,
                                           "distance": 1,
                                           "panorama": {
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_t.jpg",
                                              "overlays": [
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "12"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -3.62,
                                                  "yaw": -138.88,
                                                  "image": {
                                                   "class": "AnimatedImageResource",
                                                   "frameDuration": 41,
                                                   "colCount": 4,
                                                   "rowCount": 6,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_0_HS_0_0.png",
                                                     "width": 800,
                                                     "height": 1200
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 15.9,
                                                  "distance": 100
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_73F35EA4_668A_800D_41C4_7C4E723F2EAC",
                                                "maps": [],
                                                "useHandCursor": true
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_93B8039C_9EB7_3023_41BD_45CE1DEEC207); this.mainPlayList.set('selectedIndex', 13)"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -14.43,
                                                  "yaw": 45.88,
                                                  "image": {
                                                   "class": "AnimatedImageResource",
                                                   "frameDuration": 33,
                                                   "colCount": 4,
                                                   "rowCount": 6,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_0_HS_1_0.png",
                                                     "width": 400,
                                                     "height": 360
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 21.94,
                                                  "distance": 100
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_9AD1FA65_8F21_3968_41DE_F2366F1E4DB5",
                                                "maps": [],
                                                "useHandCursor": true
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_hq.jpeg",
                                                 "width": 6720,
                                                 "height": 3360
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_lq.jpeg",
                                                 "width": 2048,
                                                 "tags": "preload",
                                                 "height": 1024
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "yaw": 45.88,
                                              "backwardYaw": -60.85,
                                              "distance": 1,
                                              "panorama": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813"
                                             }
                                            ],
                                            "partial": false,
                                            "id": "panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "vfov": 180,
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "label": "R0010055",
                                            "thumbnailUrl": "media/panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_t.jpg"
                                           }
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "yaw": -19.66,
                                           "backwardYaw": 139.23,
                                           "distance": 1,
                                           "panorama": {
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_t.jpg",
                                              "overlays": [
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C7361D2_568A_8108_41B1_D52601D44702, this.camera_928EA312_9EB7_3027_41E2_7A23EAA18F2F); this.mainPlayList.set('selectedIndex', 16)"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -30.9,
                                                  "yaw": -5.59,
                                                  "image": {
                                                   "class": "AnimatedImageResource",
                                                   "frameDuration": 33,
                                                   "colCount": 4,
                                                   "rowCount": 6,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_0_HS_0_0.png",
                                                     "width": 400,
                                                     "height": 360
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 19.43,
                                                  "distance": 100
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_75D49014_6686_800D_41BE_448F27D8A16D",
                                                "maps": [],
                                                "useHandCursor": true
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813, this.camera_92F3E318_9EB7_3023_41D1_6D71099FC89B); this.mainPlayList.set('selectedIndex', 13)"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "items": [
                                                 {
                                                  "pitch": -41.54,
                                                  "yaw": 139.23,
                                                  "image": {
                                                   "class": "AnimatedImageResource",
                                                   "frameDuration": 33,
                                                   "colCount": 4,
                                                   "rowCount": 6,
                                                   "frameCount": 24,
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_0_HS_1_0.png",
                                                     "width": 400,
                                                     "height": 360
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 16.95,
                                                  "distance": 100
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_72B20E99_6689_8006_41BA_94D60CB21068",
                                                "maps": [],
                                                "useHandCursor": true
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_hq.jpeg",
                                                 "width": 6720,
                                                 "height": 3360
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_lq.jpeg",
                                                 "width": 2048,
                                                 "tags": "preload",
                                                 "height": 1024
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "yaw": -5.59,
                                              "backwardYaw": -68.05,
                                              "distance": 1,
                                              "panorama": {
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76, this.camera_9236F33F_9EB7_305D_41D6_502956457860); this.mainPlayList.set('selectedIndex', 15)"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "items": [
                                                    {
                                                     "pitch": -43.94,
                                                     "yaw": -68.05,
                                                     "image": {
                                                      "class": "AnimatedImageResource",
                                                      "frameDuration": 33,
                                                      "colCount": 4,
                                                      "rowCount": 6,
                                                      "frameCount": 24,
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_0_HS_0_0.png",
                                                        "width": 400,
                                                        "height": 360
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 16.31,
                                                     "distance": 100
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_7540B166_6689_800D_41D5_BEC7EED15F2F",
                                                   "maps": [],
                                                   "useHandCursor": true
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_hq.jpeg",
                                                    "width": 6720,
                                                    "height": 3360
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_lq.jpeg",
                                                    "width": 2048,
                                                    "tags": "preload",
                                                    "height": 1024
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "hfovMax": 130,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -68.05,
                                                 "backwardYaw": -5.59,
                                                 "distance": 1,
                                                 "panorama": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76"
                                                }
                                               ],
                                               "partial": false,
                                               "id": "panorama_5C7361D2_568A_8108_41B1_D52601D44702",
                                               "hfovMin": 60,
                                               "pitch": 0,
                                               "vfov": 180,
                                               "class": "Panorama",
                                               "hfov": 360,
                                               "label": "R0010057",
                                               "thumbnailUrl": "media/panorama_5C7361D2_568A_8108_41B1_D52601D44702_t.jpg"
                                              }
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "yaw": 139.23,
                                              "backwardYaw": -19.66,
                                              "distance": 1,
                                              "panorama": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813"
                                             }
                                            ],
                                            "partial": false,
                                            "id": "panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "vfov": 180,
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "label": "R0010056",
                                            "thumbnailUrl": "media/panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_t.jpg"
                                           }
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "yaw": -165.19,
                                           "backwardYaw": 16.03,
                                           "distance": 1,
                                           "panorama": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD"
                                          }
                                         ],
                                         "partial": false,
                                         "id": "panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "vfov": 180,
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "label": "R0010054",
                                         "thumbnailUrl": "media/panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_t.jpg"
                                        }
                                       }
                                      ],
                                      "partial": false,
                                      "id": "panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "vfov": 180,
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "label": "R0010051",
                                      "thumbnailUrl": "media/panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_t.jpg"
                                     }
                                    }
                                   ],
                                   "partial": false,
                                   "id": "panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "label": "R0010050",
                                   "thumbnailUrl": "media/panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_t.jpg"
                                  }
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": 31.13,
                                  "backwardYaw": -150.07,
                                  "distance": 1,
                                  "panorama": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC"
                                 }
                                ],
                                "partial": false,
                                "id": "panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
                                "hfovMin": 60,
                                "pitch": 0,
                                "vfov": 180,
                                "class": "Panorama",
                                "hfov": 360,
                                "label": "R0010049",
                                "thumbnailUrl": "media/panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_t.jpg"
                               }
                              },
                              {
                               "class": "AdjacentPanorama",
                               "yaw": 30.44,
                               "backwardYaw": 39.64,
                               "distance": 1,
                               "panorama": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A"
                              }
                             ],
                             "partial": false,
                             "id": "panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
                             "hfovMin": 60,
                             "pitch": 0,
                             "vfov": 180,
                             "class": "Panorama",
                             "hfov": 360,
                             "label": "R0010048",
                             "thumbnailUrl": "media/panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_t.jpg"
                            }
                           }
                          ],
                          "partial": false,
                          "id": "panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
                          "hfovMin": 60,
                          "pitch": 0,
                          "vfov": 180,
                          "class": "Panorama",
                          "hfov": 360,
                          "label": "R0010047",
                          "thumbnailUrl": "media/panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_t.jpg"
                         }
                        }
                       ],
                       "partial": false,
                       "id": "panorama_5C70F16F_568A_8118_41CE_4D314702C266",
                       "hfovMin": 60,
                       "pitch": 0,
                       "vfov": 180,
                       "class": "Panorama",
                       "hfov": 360,
                       "label": "R0010046",
                       "thumbnailUrl": "media/panorama_5C70F16F_568A_8118_41CE_4D314702C266_t.jpg"
                      }
                     }
                    ],
                    "partial": false,
                    "id": "panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
                    "hfovMin": 60,
                    "pitch": 0,
                    "vfov": 180,
                    "class": "Panorama",
                    "hfov": 360,
                    "label": "R0010045",
                    "thumbnailUrl": "media/panorama_5C70DD9F_568A_8138_41B1_768130BAA068_t.jpg"
                   }
                  }
                 ],
                 "partial": false,
                 "id": "panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
                 "hfovMin": 60,
                 "pitch": 0,
                 "vfov": 180,
                 "class": "Panorama",
                 "hfov": 360,
                 "label": "R0010043",
                 "thumbnailUrl": "media/panorama_5C706677_568A_8308_41CC_541C9E4F7D73_t.jpg"
                }
               },
               {
                "class": "AdjacentPanorama",
                "yaw": 14.59,
                "backwardYaw": 173.2,
                "distance": 1,
                "panorama": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B"
               }
              ],
              "partial": false,
              "id": "panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
              "hfovMin": 60,
              "pitch": 0,
              "vfov": 180,
              "class": "Panorama",
              "hfov": 360,
              "label": "R0010041",
              "thumbnailUrl": "media/panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_t.jpg"
             }
            },
            {
             "class": "AdjacentPanorama",
             "yaw": 77.13,
             "backwardYaw": -52.54,
             "distance": 1,
             "panorama": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C"
            },
            {
             "class": "AdjacentPanorama",
             "yaw": 155.7,
             "backwardYaw": -103.06,
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B, this.camera_920CF360_9EB7_30E3_41AC_7D58B04F99D9); this.mainPlayList.set('selectedIndex', 3)"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -35.71,
                    "yaw": -103.06,
                    "image": {
                     "class": "AnimatedImageResource",
                     "frameDuration": 33,
                     "colCount": 4,
                     "rowCount": 6,
                     "frameCount": 24,
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_0_HS_0_0.png",
                       "width": 400,
                       "height": 360
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 18.39,
                    "distance": 100
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_9960F799_8F23_17D8_41DA_18044BBCAF27",
                  "maps": [],
                  "useHandCursor": true
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_hq.jpeg",
                   "width": 6720,
                   "height": 3360
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_lq.jpeg",
                   "width": 2048,
                   "tags": "preload",
                   "height": 1024
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                }
               }
              ],
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "yaw": -103.06,
                "backwardYaw": 155.7,
                "distance": 1,
                "panorama": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B"
               }
              ],
              "partial": false,
              "id": "panorama_5C7306CE_568A_8318_41AE_148542B578B5",
              "hfovMin": 60,
              "pitch": 0,
              "vfov": 180,
              "class": "Panorama",
              "hfov": 360,
              "label": "R0010058",
              "thumbnailUrl": "media/panorama_5C7306CE_568A_8318_41AE_148542B578B5_t.jpg"
             }
            }
           ],
           "partial": false,
           "id": "panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
           "hfovMin": 60,
           "pitch": 0,
           "vfov": 180,
           "class": "Panorama",
           "hfov": 360,
           "label": "R0010040",
           "thumbnailUrl": "media/panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_t.jpg"
          }
         }
        ],
        "partial": false,
        "id": "panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
        "hfovMin": 60,
        "pitch": 0,
        "vfov": 180,
        "class": "Panorama",
        "hfov": 360,
        "label": "R0010039",
        "thumbnailUrl": "media/panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_t.jpg"
       }
      },
      {
       "class": "AdjacentPanorama",
       "yaw": 111.43,
       "backwardYaw": -60.85,
       "distance": 1,
       "panorama": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134"
      }
     ],
     "partial": false,
     "id": "panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
     "hfovMin": 60,
     "pitch": 0,
     "vfov": 180,
     "class": "Panorama",
     "hfov": 360,
     "label": "R0010038",
     "thumbnailUrl": "media/panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_t.jpg"
    }
   }
  ],
  "partial": false,
  "id": "panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
  "hfovMin": 60,
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "hfov": 360,
  "label": "R0010037",
  "thumbnailUrl": "media/panorama_5CDD2249_568B_8318_41AD_5EEE12274134_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
 {
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1700,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
    "media": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
    "media": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
    "media": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
    "media": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
    "media": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
    "media": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
    "media": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
    "media": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
    "media": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
    "media": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
    "media": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
    "media": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
    "media": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
    "media": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
    "media": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
    "media": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
    "media": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134_camera",
    "media": "this.panorama_5CDD2249_568B_8318_41AD_5EEE12274134",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE_camera",
    "media": "this.panorama_5DC04320_568D_8108_41CF_4DE5D6DF2AEE",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C_camera",
    "media": "this.panorama_5C7435DC_568D_8138_41A6_BEDAD5D1455C",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B_camera",
    "media": "this.panorama_5C77CB4A_568D_8118_41C7_C2DA2531355B",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13_camera",
    "media": "this.panorama_5C700EF3_568D_8309_41B3_0EA50315DB13",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73_camera",
    "media": "this.panorama_5C706677_568A_8308_41CC_541C9E4F7D73",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068_camera",
    "media": "this.panorama_5C70DD9F_568A_8138_41B1_768130BAA068",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266_camera",
    "media": "this.panorama_5C70F16F_568A_8118_41CE_4D314702C266",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A_camera",
    "media": "this.panorama_5C70D4F1_568A_8708_41D0_E5F555E54B8A",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC_camera",
    "media": "this.panorama_5C7058E9_568B_8F18_41C2_EB76D869DCCC",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5_camera",
    "media": "this.panorama_5C707C94_568B_870F_41B0_4E5662E50AB5",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997_camera",
    "media": "this.panorama_5C71BFD3_568B_8108_41C1_AAF8D2C85997",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD_camera",
    "media": "this.panorama_5C7184AC_568B_8718_41BD_7066CA61B3BD",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813_camera",
    "media": "this.panorama_5C70B337_568A_8108_41C6_47FC5A3C2813",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84_camera",
    "media": "this.panorama_5C70C808_568A_8F18_41D5_36F0ECE32B84",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76_camera",
    "media": "this.panorama_5C730CBA_568A_8778_41C2_8F7B0B0DAD76",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702_camera",
    "media": "this.panorama_5C7361D2_568A_8108_41B1_D52601D44702",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5_camera",
    "media": "this.panorama_5C7306CE_568A_8318_41AE_148542B578B5",
    "begin": "this.setEndToItemIndex(this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3, 17, 0)"
   }
  ]
 },
 {
  "propagateClick": false,
  "bodyBorderSize": 0,
  "footerBackgroundOpacity": 1,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "minWidth": 20,
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "titleFontColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 0,
  "closeButtonPaddingRight": 0,
  "headerPaddingRight": 10,
  "contentOpaque": false,
  "gap": 10,
  "closeButtonBorderSize": 0,
  "shadowVerticalLength": 0,
  "borderSize": 0,
  "title": "\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u043f\u0430\u043d\u0434\u0443\u0441",
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBorderColor": "#000000",
  "horizontalAlign": "center",
  "footerBorderSize": 0,
  "bodyBorderColor": "#000000",
  "headerPaddingLeft": 10,
  "titleFontSize": "20px",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "closeButtonBackgroundColorRatios": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "bodyPaddingTop": 5,
  "closeButtonIconColor": "#000000",
  "shadowColor": "#000000",
  "headerBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonPaddingTop": 0,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundOpacity": 1,
  "class": "Window",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titlePaddingBottom": 5,
  "shadowSpread": 1,
  "veilColorDirection": "horizontal",
  "titlePaddingTop": 5,
  "children": [
   {
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "width": "100%",
    "height": "100%",
    "paddingLeft": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "minHeight": 0,
    "id": "htmlText_uid93E7D2D4_9EB7_3023_41D0_E95F1F5F2FBF",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.11vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.11vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "shadow": false,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "class": "HTMLText",
    "data": {
     "name": "HTMLText1568"
    }
   }
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 1,
  "closeButtonIconLineWidth": 2,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingRight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "width": 400,
  "creationPolicy": "delayed",
  "closeButtonPaddingBottom": 0,
  "bodyPaddingBottom": 5,
  "layout": "vertical",
  "height": 40,
  "closeButtonBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 0,
  "footerHeight": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBorderColor": "#000000",
  "titleFontWeight": "bold",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBorderRadius": 11,
  "bodyPaddingLeft": 5,
  "shadowBlurRadius": 6,
  "borderRadius": 5,
  "shadowOpacity": 0.5,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPaddingLeft": 0,
  "minHeight": 20,
  "id": "window_75406903_7B0B_B250_41C2_BD7D1D269B1F",
  "closeButtonIconHeight": 12,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 2,
  "titlePaddingLeft": 5,
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 0,
  "data": {
   "name": "Window2725"
  },
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Nunito Light",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "titleTextDecoration": "none",
  "closeButtonBorderColor": "#000000"
 },
 {
  "propagateClick": false,
  "bodyBorderSize": 0,
  "footerBackgroundOpacity": 1,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "minWidth": 20,
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "titleFontColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 0,
  "closeButtonPaddingRight": 0,
  "headerPaddingRight": 10,
  "contentOpaque": false,
  "gap": 10,
  "closeButtonBorderSize": 0,
  "shadowVerticalLength": 0,
  "borderSize": 0,
  "title": "\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u043f\u0430\u043d\u0434\u0443\u0441",
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBorderColor": "#000000",
  "horizontalAlign": "center",
  "footerBorderSize": 0,
  "bodyBorderColor": "#000000",
  "headerPaddingLeft": 10,
  "titleFontSize": "20px",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "closeButtonBackgroundColorRatios": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "bodyPaddingTop": 5,
  "closeButtonIconColor": "#000000",
  "shadowColor": "#000000",
  "headerBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonPaddingTop": 0,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundOpacity": 1,
  "class": "Window",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titlePaddingBottom": 5,
  "shadowSpread": 1,
  "veilColorDirection": "horizontal",
  "titlePaddingTop": 5,
  "children": [
   {
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "width": "100%",
    "height": "100%",
    "paddingLeft": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "minHeight": 0,
    "id": "htmlText_uid93E632D5_9EB7_302D_41A5_66A000026AFD",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.11vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.11vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "shadow": false,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "class": "HTMLText",
    "data": {
     "name": "HTMLText1569"
    }
   }
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 1,
  "closeButtonIconLineWidth": 2,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingRight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "width": 400,
  "creationPolicy": "delayed",
  "closeButtonPaddingBottom": 0,
  "bodyPaddingBottom": 5,
  "layout": "vertical",
  "height": 40,
  "closeButtonBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 0,
  "footerHeight": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBorderColor": "#000000",
  "titleFontWeight": "bold",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBorderRadius": 11,
  "bodyPaddingLeft": 5,
  "shadowBlurRadius": 6,
  "borderRadius": 5,
  "shadowOpacity": 0.5,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPaddingLeft": 0,
  "minHeight": 20,
  "id": "window_755358F1_7B16_B3B0_41BE_9F126F6621C0",
  "closeButtonIconHeight": 12,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 2,
  "titlePaddingLeft": 5,
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 0,
  "data": {
   "name": "Window2725"
  },
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Nunito Light",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "titleTextDecoration": "none",
  "closeButtonBorderColor": "#000000"
 },
 {
  "propagateClick": false,
  "backgroundColor": [],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "minWidth": 20,
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "titleFontColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 0,
  "headerPaddingRight": 10,
  "contentOpaque": false,
  "gap": 10,
  "shadowVerticalLength": 0,
  "borderSize": 0,
  "title": "\u0432\u0430\u043f\u0432\u0430\u043f\u0432\u0430\u0432\u0430\u043f",
  "closeButtonPressedIconColor": "#FFFFFF",
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "titleFontSize": "1.29vh",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "closeButtonBackgroundColorRatios": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "bodyPaddingTop": 5,
  "closeButtonIconColor": "#000000",
  "shadowColor": "#000000",
  "headerBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "shadow": true,
  "titleFontWeight": "normal",
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "class": "Window",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titlePaddingBottom": 5,
  "shadowSpread": 1,
  "veilColorDirection": "horizontal",
  "titlePaddingTop": 5,
  "children": [
   {
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "width": "100%",
    "height": "100%",
    "paddingLeft": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "minHeight": 0,
    "id": "htmlText_uid93E012D6_9EB7_302F_41D8_3E6045749FD1",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.11vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.11vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "shadow": false,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "class": "HTMLText",
    "data": {
     "name": "HTMLText1570"
    }
   }
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonIconLineWidth": 2,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingRight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "width": 400,
  "creationPolicy": "delayed",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "bodyPaddingBottom": 5,
  "layout": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "bodyPaddingLeft": 5,
  "shadowBlurRadius": 6,
  "borderRadius": 5,
  "shadowOpacity": 0.5,
  "bodyBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "id": "window_6ED89A49_7D3A_76D0_41DB_3393D9DBA78B",
  "closeButtonIconHeight": 12,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "titlePaddingLeft": 5,
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "data": {
   "name": "Window21028"
  },
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "veilOpacity": 0.4,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "titleTextDecoration": "none"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.8,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92ACB2FE_9EB7_31DF_41C5_F0DEF4C5E78C",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.77,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_929D4305_9EB7_302D_41E3_185FE9861420",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 29.93,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_9287D30C_9EB7_3023_41CD_27EE5A83645B",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.95,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_928EA312_9EB7_3027_41E2_7A23EAA18F2F",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.34,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92F3E318_9EB7_3023_41D1_6D71099FC89B",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -165.41,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92E5531F_9EB7_305D_41E1_443F4D205227",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.46,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92EFB325_9EB7_306D_41C6_1A228A9A9A85",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.94,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92D1132B_9EB7_3065_41B4_84B4B4535A40",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1700,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -151.62,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92DA5332_9EB7_3067_41A1_028308C039A1",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.45,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92CF7338_9EB7_3063_41DC_791253A6FE45",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.41,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_9236F33F_9EB7_305D_41D6_502956457860",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.01,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_923B3345_9EB7_302D_41D1_CC630771B8D4",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.87,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_922D734C_9EB7_3023_41D0_D4FE4AFAAB0A",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.2,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_92169353_9EB7_3025_41C8_388634F2732E",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 70.76,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_921B635A_9EB7_3027_41B9_98BF406E6738",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.3,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_920CF360_9EB7_30E3_41AC_7D58B04F99D9",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.24,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_9270F366_9EB7_30EF_41D6_600A5D5F4BD3",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 119.15,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_927A936D_9EB7_30FD_41D6_B5223F03E879",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.46,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_926ED373_9EB7_30E5_41DD_4A33298AF9B9",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.56,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_9250A379_9EB7_30E5_41C1_19AE3F50FEA6",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.81,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_9247837F_9EB7_30DD_41E0_C43EED10237C",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.57,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93B46390_9EB7_3023_41C2_0350F71E75F3",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 119.15,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93B8039C_9EB7_3023_41BD_45CE1DEEC207",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.9,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93AE03A7_9EB7_306D_41B6_59C1F4F98CA5",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -134.12,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_939213B4_9EB7_3063_41D9_E9406A32E318",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.77,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_938003C0_9EB7_3023_41E2_09DECAD63617",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.97,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93F7C3CC_9EB7_3023_41D3_323C89EB7E31",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.3,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93E463D8_9EB7_3023_41DF_F2B01FAD7515",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.87,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93D503E0_9EB7_37E3_41C6_528AAF426F80",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.36,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_93D833E7_9EB7_37ED_41C8_FEEE23920110",
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "toolTipDisplayTime": 600,
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "toolTipFontWeight": "bold",
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "borderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "transitionDuration": 500,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadow": true,
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressBarBorderRadius": 0,
  "progressLeft": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#000000",
  "height": "100%",
  "width": "100%",
  "toolTipBorderSize": 2,
  "toolTipPaddingRight": 20,
  "toolTipBorderRadius": 5,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Nunito",
  "borderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "paddingRight": 0,
  "toolTipPaddingLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderSize": 0,
  "toolTipFontSize": "10.55vmin",
  "progressBarBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0
 },
 {
  "propagateClick": false,
  "children": [
   {
    "itemVerticalAlign": "middle",
    "maxWidth": 800,
    "itemLabelPosition": "bottom",
    "propagateClick": false,
    "backgroundColor": [
     "#000000"
    ],
    "itemBackgroundColorRatios": [],
    "scrollBarColor": "#FFFFFF",
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "itemMode": "normal",
    "paddingTop": 10,
    "playList": "this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3",
    "minWidth": 0,
    "itemBorderRadius": 0,
    "maxHeight": 600,
    "paddingLeft": 20,
    "itemLabelFontStyle": "normal",
    "itemPaddingTop": 3,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowOpacity": 0.8,
    "itemThumbnailOpacity": 1,
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontSize": 14,
    "layout": "horizontal",
    "itemLabelGap": 5,
    "borderSize": 0,
    "itemBackgroundOpacity": 0,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingBottom": 3,
    "horizontalAlign": "left",
    "itemHorizontalAlign": "center",
    "borderRadius": 5,
    "itemOpacity": 1,
    "itemThumbnailShadowBlurRadius": 4,
    "itemLabelFontFamily": "Arial",
    "itemLabelFontWeight": "normal",
    "paddingBottom": 10,
    "minHeight": 0,
    "itemLabelTextDecoration": "none",
    "itemPaddingLeft": 3,
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0
    ],
    "shadow": false,
    "itemThumbnailWidth": 100,
    "itemThumbnailShadowVerticalLength": 3,
    "backgroundOpacity": 0.2,
    "selectedItemLabelFontWeight": "bold",
    "scrollBarMargin": 2,
    "backgroundColorDirection": "vertical",
    "itemLabelHorizontalAlign": "center",
    "paddingRight": 20,
    "itemThumbnailHeight": 75,
    "itemPaddingRight": 3,
    "class": "ThumbnailList",
    "data": {
     "name": "ThumbnailList549"
    },
    "itemThumbnailShadow": true,
    "itemBackgroundColor": [],
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailScaleMode": "fit_outside",
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowColor": "#000000"
   }
  ],
  "right": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minWidth": 20,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "overflow": "visible",
  "creationPolicy": "delayed",
  "height": 200,
  "paddingLeft": 0,
  "layout": "horizontal",
  "contentOpaque": false,
  "gap": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "bottom": 0,
  "paddingBottom": 0,
  "minHeight": 20,
  "verticalAlign": "bottom",
  "scrollBarMargin": 2,
  "shadow": false,
  "backgroundOpacity": 0,
  "data": {
   "name": "Container548"
  },
  "paddingRight": 0,
  "class": "Container",
  "left": 0
 }
], 
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "layout": "absolute",
 "contentOpaque": false,
 "gap": 10,
 "width": "100%",
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "shadow": false,
 "paddingRight": 0,
 "class": "Player",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player546"
 },
 "start": "this.syncPlaylists([this.playList_5C48D6FC_568A_80F8_41C9_1B696BF553F3,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)"
})