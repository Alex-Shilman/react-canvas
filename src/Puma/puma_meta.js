const puma_paths = [
  "M139.048,60.699l0.301,0.149c0.934-0.566,1.801-0.982,2.6-1.25l1.9-0.35l0.801,0.25 c0.699,0.367,1.049,1.2,1.049,2.5l-0.949,0.85c1,0.101,1.717,0.551,2.15,1.351l0.049,0.05l0.301,1.6 c0,1.934-4.051,5.217-12.15,9.851l-3.699,2.149c-2.668,4.534-4,9-4,13.4c0,2.1,1.066,5.033,3.199,8.801l4.801,8.549 c1.432,3.135,3.199,5.352,5.299,6.65h1.15c3,0.168,5.1,0.717,6.301,1.65c1.932,0.133,3.182,0.367,3.75,0.699 c1.266,0.768,1.898,2.518,1.898,5.25c0,1.602-1.25,2.617-3.75,3.051l-12.148,0.4c-3.201,0-5.385-0.467-6.551-1.4 c-0.699-0.533-1.051-1.301-1.051-2.301l0.051-0.398l-3.35-4.9c-3.533-5.533-5.65-8.65-6.35-9.351l-8-7.899 c-3.967-4.167-5.951-7.101-5.951-8.801c0-0.566,0.533-1.833,1.6-3.8l3.602-6.7c1.166-2.434,2.133-4.866,2.898-7.3l-6.75,3.399 l-5.949,3.5l-1.551,0.951l-2.199,1.6l-0.75,5.5c0.334,2.8,1.316,6.517,2.949,11.15l0.4,1.149c3.066,5.899,5.9,10.567,8.5,14.001 l1.201,1.799c0.699,0.9,1.615,1.5,2.75,1.801l5.699,0.5c2.066,0,3.699,0.449,4.9,1.35c1.6,1.199,2.717,2.383,3.35,3.551 c0.533,0.965,0.801,2.049,0.801,3.25c0,0.766-0.234,1.432-0.701,2L127,129.399l-1.451,1.051c-1.766,0.666-5.615,1-11.549,1 c-2.867,0-5.184-0.535-6.951-1.602l-2-1.75l-0.5-0.6l-0.549-0.15c-0.334-1.133-0.951-2.016-1.85-2.648l-0.852-0.75v-0.051 L97.9,121.2c-2.367-1.467-3.9-3.367-4.602-5.701l-0.5-3l-0.799-2.8c-0.301-0.833-2.668-4.683-7.1-11.55l-3.852-6.15 c-1.6-2.732-2.398-4.434-2.398-5.1c0-1.367,0.566-2.733,1.699-4.1l0.699-0.701l3.102-3.199l0.049-0.051 c3.6-3.899,5.4-8.466,5.4-13.699v-0.9c-0.166-3.066-1.117-6.616-2.85-10.65l-1-2.449l-0.4-1.15l-0.449-1.3h6.25l-0.201-0.899 c0-1.367,0.184-2.451,0.551-3.25l0.199-0.301l-0.199-2.85l-0.051-2.051c0-3.232,1.801-4.35,5.4-3.35l1.4,0.45l1.4-4.7l0.049,0.45 l-0.449,2.899l-0.15,1.451l-0.051,0.299c2.168,1.101,3.385,2.734,3.65,4.9c0,3.233,0.367,5.551,1.1,6.95h6.701 c2.832,2.366,5.666,3.767,8.5,4.2l-0.801-4.2h5c0.301,2.833,0.717,5.017,1.25,6.55l0.35,1.2c1.533-2.399,2.75-3.316,3.65-2.75 l1.201,1.25c0.5,0.534,0.967,0.8,1.398,0.8l1-0.3c0.4-0.233,0.75-0.351,1.051-0.351c1.4,0,2.367,0.701,2.9,2.101 c0.266,0.733,0.4,1.5,0.4,2.3l1.199,0.45L139.048,60.699 M103.15,21.649l-0.701,0.9L102,23.449 c-0.533-2.033-1.916-2.899-4.15-2.601l-0.9,0.15c1.066-0.833,2.084-1.4,3.051-1.699C102.033,18.632,103.082,19.416,103.15,21.649 M99.25,41.649c0.166,0.533,0.449,0.983,0.85,1.35l0.1-0.5l-0.4-0.6L99.25,41.649 M95.449,38.799l-0.65-0.201H94.25 c-0.201,0.234-0.301,0.734-0.301,1.5L94,40.348l0.75-0.85L95.449,38.799 M106.4,120.549l-1.102-1.551h-0.049l1.1,1.551H106.4",
  "M122.75,58.848l-3.301-0.549c-1.5-0.301-2.816-0.75-3.949-1.351c-1.434-0.7-4.383-1.95-8.85-3.75 c-2.434-0.933-4.617-2.2-6.551-3.8c-1.434-1.233-2.732-2.633-3.9-4.2c-2.566-3.466-3.9-7.083-4-10.851l0.051-3.399l0.25-2.649 c0.299-2.201,0.717-3.701,1.25-4.5l0.199-0.201L93.9,23.549c0.832-1.701,2.1-3.268,3.799-4.701 c1.734-1.466,3.301-2.316,4.701-2.549l1.199,0.049h0.15l3.449-0.549c17.566-2.533,35.684-1.033,54.35,4.5 c12.467,3.533,23.717,5.1,33.75,4.699l1-0.1c2.234-0.2,4.418-1,6.551-2.4c2.434-1.699,4.732-2.583,6.9-2.65l5.699,0.101l5.35-0.3 c2.768-0.2,5.885-0.95,9.352-2.25c3.432-1.334,6.883-2.983,10.35-4.95c3.367-2,6.666-3.634,9.9-4.899 c2.699-1.033,4.467-1.967,5.299-2.801c0.668-1.133,1.234-1.934,1.701-2.4c0.766-0.866,1.6-1.316,2.5-1.35 c0.832-0.033,1.799,0.301,2.898,1l3,1.95L269,4.799l3.75,0.6c1.6,0.334,3.082,1.383,4.449,3.15c1.533,2,2.734,3.199,3.6,3.6 c3.834,1.699,6.967,3.367,9.4,5c0.967,0.6,1.6,1.05,1.9,1.35c0.6,0.6,0.967,1.316,1.1,2.15l0.201,3l0.35,3l-0.75,1.3l-0.25,0.2 l-0.301,0.55c-0.5,0.934-1.033,1.399-1.6,1.399l-1.051-0.199c-0.365,0-0.682,0.184-0.949,0.55c-0.232,0.3-0.334,0.649-0.301,1.05 c0,0.768,0.4,1.2,1.201,1.301c0.732,0.066,1.1,0.35,1.1,0.85c0.033,0.867-0.566,1.883-1.801,3.05l-1.6,1.149l-0.65,0.4 c-2.898,0.066-5.615-0.717-8.148-2.35l-1.5-0.7l-6.301-0.2c-1.867,0.6-3.633,1.417-5.301,2.45l-8.049,4.45 c-3.301,1.834-6.268,4.184-8.9,7.05c-1.133,1.267-2.117,2.583-2.949,3.95l-2.951,5.85c-2.033,4.167-4.916,7.7-8.65,10.6 c-4.967,4.334-10.883,7.65-17.75,9.951c-11.066,3.766-22.166,4.316-33.299,1.649l-1.35-0.101c-5.201,0.135-10.418-0.449-15.65-1.75 c-11.668-2.766-22.484-7.416-32.451-13.949l-6.148-4.2C125.732,59.949,124.183,59.249,122.75,58.848",
  "M225.199,42.098c0,3.067-1.383,7.451-4.15,13.15c-2.766,5.667-4.148,9.15-4.148,10.45 c0,3,1.416,9.116,4.25,18.351c2.299,7.566,3.967,12.533,5,14.899c0.799,1.833,1.766,4.684,2.898,8.55 c1.4,3.268,3.801,5.801,7.201,7.6c1.033,0.533,3.482,1.102,7.35,1.701c3.199,0.5,5.35,1.416,6.449,2.75 c0.467,0.6,0.9,1.949,1.301,4.049c0.367,1.834,0.551,3.217,0.551,4.15c0,0.801-0.217,1.434-0.65,1.9 c-0.566,0.633-1.383,0.949-2.451,0.949l-3.6-0.25l-3.799-0.1l-8.852,0.1c-2.033-0.467-3.383-1.549-4.049-3.25 c-0.434-1.934-0.883-3.232-1.35-3.898c-0.701-1.035-2.734-2-6.102-2.9c-3.398-0.967-5.432-1.934-6.1-2.9 c-1.033-1.5-2.217-4-3.549-7.5c-1.367-3.5-2.568-6.017-3.602-7.551c-4.666-5.799-8.299-10.549-10.898-14.25 c-4.834-6.732-7.25-12.016-7.25-15.85c0-1.766,0.383-3.482,1.148-5.15l3.102-5.799l0.148-10.5c0-5.334,1.617-9.65,4.852-12.951 c2.832-2.799,6.416-4.5,10.75-5.1c4.066-0.5,7.633,0.084,10.699,1.75C223.582,36.299,225.199,38.833,225.199,42.098",
  "M208.199,60.899c-3.266,6.033-5.449,11.949-6.549,17.75c-0.301,1.699-0.701,6.033-1.201,13 c-0.434,6.467-0.65,10.483-0.65,12.05c0,2.399,0.301,4.601,0.9,6.601c0.834,2.699,2.184,4.783,4.051,6.25 c4.799,1.033,7.967,1.883,9.5,2.549c2.232,1,3.35,2.334,3.35,4c0,1.268-0.184,2.201-0.551,2.801 c-0.766,1.133-2.332,1.699-4.699,1.699c-7.699,0-12.816-0.699-15.35-2.1c-1.168-0.666-1.85-1.766-2.051-3.299 c-0.133-1-0.549-2.15-1.25-3.451c-0.799-1.4-1.684-2.5-2.65-3.299c-2.699-2.268-4.217-4.817-4.549-7.65l0.15-6.4 c-0.135-3.301-1.602-8.75-4.4-16.35c-2.734-7-4.1-10.701-4.1-11.101c0-1.2,1.467-5.583,4.398-13.149 c3.168-8.268,4.885-12.967,5.15-14.101c0.9-3.667,1.684-6,2.35-7c2.068-3.066,5.201-3.083,9.4-0.05 c2.168,0.733,4.918,2.767,8.25,6.1c3.4,3.4,5.1,5.884,5.1,7.45L208.199,60.899",
  "M101.548,17.949l1.15,1.75c0.5,0.934,0.75,1.934,0.75,3c0,1.3-0.732,2.384-2.199,3.25 c-1.967,0.899-3.434,1.649-4.4,2.25c-0.9,0.601-2.367,2.05-4.4,4.351c-2.199,2.467-3.75,4.516-4.65,6.149l-7.449,12.45 c-3.066,4.9-5.367,8.717-6.9,11.449c-5.766,10.467-11.883,17.518-18.35,21.15c-6.467,3.634-11.75,6.084-15.85,7.35 c-4.133,1.268-8.75,1.784-13.85,1.551c-5.068-0.233-10.4-1.25-16-3.051c-5.635-1.832-9.268-4.216-10.9-7.149 c-1.701-2.933-1.316-4.683,1.15-5.25c2.432-0.601,4.982-0.351,7.648,0.75l9.9,4.2c3.9,1.666,10,2.383,18.301,2.15 c8.266-0.234,16.967-6.201,26.1-17.9c9.133-11.733,14.617-19.667,16.449-23.801l4.9-11.199c1.334-2.767,2.816-4.867,4.451-6.301 l3.6-3c0.732-0.766,2.1-1.732,4.1-2.899c0.5-0.267,1.684-0.649,3.551-1.149l0.549-0.15l0.801,0.05H101.548",
  "M93.798,34.399l-0.449,6.5c-0.166,1.434-0.883,3.467-2.15,6.1c0,0.334,0.217,0.617,0.65,0.85l1.1,0.5 l0.1,0.301l-0.85,0.85l-2.75,0.551L88.9,50.699l-0.602,0.351c-1.465,0-2.633-1.201-3.5-3.601l-1-3.899v-1.351l0.15-0.05l0.5-0.1 l0.65,0.25l0.449,0.35l-0.299-2.551c0-2.866,1.434-5.116,4.299-6.75c1.135-0.633,2.102-0.865,2.9-0.699 C93.349,32.782,93.798,33.366,93.798,34.399 M91.849,39.049c0.301-1.033,0.383-2.15,0.25-3.351l-0.25,3.101V39.049"
  ]

export default puma_paths;

