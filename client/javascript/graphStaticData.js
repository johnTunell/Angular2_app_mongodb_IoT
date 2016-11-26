



$(document).ready(function() {
    var data = [[{"time":"2016-04-20T11:33:41.57Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":387,"RSSI_dbm":17,"Seq_nr":36,"Uptime_sec":1218,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:39:17.787Z","Ambient_temp":23,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":235,"RSSI_dbm":17,"Seq_nr":47,"Uptime_sec":1596,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:41:17.015Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":344,"RSSI_dbm":17,"Seq_nr":51,"Uptime_sec":1739,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:43:51.762Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":328,"RSSI_dbm":17,"Seq_nr":2,"Uptime_sec":58,"VDD3_mV":2909,"myName":"N101"},{"time":"2016-04-20T11:45:48.398Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":328,"RSSI_dbm":17,"Seq_nr":6,"Uptime_sec":190,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:46:51.077Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":328,"RSSI_dbm":16,"Seq_nr":8,"Uptime_sec":260,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:47:53.178Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":328,"RSSI_dbm":17,"Seq_nr":10,"Uptime_sec":325,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:48:52.835Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":244,"RSSI_dbm":17,"Seq_nr":12,"Uptime_sec":396,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:50:20.217Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":244,"RSSI_dbm":17,"Seq_nr":15,"Uptime_sec":500,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:50:46.975Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":244,"RSSI_dbm":17,"Seq_nr":16,"Uptime_sec":537,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:51:15.514Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":244,"RSSI_dbm":17,"Seq_nr":17,"Uptime_sec":573,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:52:46.464Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":244,"RSSI_dbm":16,"Seq_nr":20,"Uptime_sec":679,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:54:20.935Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":23,"Uptime_sec":782,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T11:55:50.418Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":26,"Uptime_sec":886,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:56:21.452Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":27,"Uptime_sec":920,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:56:52.994Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":28,"Uptime_sec":954,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:57:24.62Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":29,"Uptime_sec":987,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T11:57:55.646Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":286,"RSSI_dbm":17,"Seq_nr":30,"Uptime_sec":1023,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:58:26.705Z","Ambient_temp":23,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":17,"Seq_nr":31,"Uptime_sec":1057,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T11:58:54.097Z","Ambient_temp":23,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":17,"Seq_nr":32,"Uptime_sec":1092,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T11:59:27.777Z","Ambient_temp":23,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":17,"Seq_nr":33,"Uptime_sec":1127,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:01:02.385Z","Ambient_temp":23,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":17,"Seq_nr":36,"Uptime_sec":1226,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:01:32.262Z","Ambient_temp":23,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":17,"Seq_nr":37,"Uptime_sec":1261,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:02:02.684Z","Ambient_temp":23,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":16,"Seq_nr":38,"Uptime_sec":1296,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:02:37.465Z","Ambient_temp":23,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":166,"RSSI_dbm":16,"Seq_nr":39,"Uptime_sec":1332,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:04:26.922Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":341,"RSSI_dbm":17,"Seq_nr":43,"Uptime_sec":1473,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:05:24.636Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":341,"RSSI_dbm":17,"Seq_nr":45,"Uptime_sec":1546,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:07:49.577Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":191,"RSSI_dbm":17,"Seq_nr":4,"Uptime_sec":115,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:10:50.631Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":191,"RSSI_dbm":16,"Seq_nr":10,"Uptime_sec":318,"VDD3_mV":2909,"myName":"N101"},{"time":"2016-04-20T12:11:16.422Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":191,"RSSI_dbm":16,"Seq_nr":11,"Uptime_sec":350,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:11:50.38Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":281,"RSSI_dbm":17,"Seq_nr":12,"Uptime_sec":382,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:12:20.11Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":281,"RSSI_dbm":17,"Seq_nr":13,"Uptime_sec":415,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:15:46.458Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":281,"RSSI_dbm":17,"Seq_nr":20,"Uptime_sec":655,"VDD3_mV":2909,"myName":"N101"},{"time":"2016-04-20T12:18:54.82Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":308,"RSSI_dbm":17,"Seq_nr":26,"Uptime_sec":857,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:19:25.346Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":308,"RSSI_dbm":17,"Seq_nr":27,"Uptime_sec":891,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:19:57.272Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":308,"RSSI_dbm":17,"Seq_nr":28,"Uptime_sec":927,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:21:30.664Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":101,"RSSI_dbm":17,"Seq_nr":31,"Uptime_sec":1032,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:22:22.416Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":101,"RSSI_dbm":17,"Seq_nr":33,"Uptime_sec":1102,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:22:54.035Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":101,"RSSI_dbm":17,"Seq_nr":34,"Uptime_sec":1137,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T12:24:28.822Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":101,"RSSI_dbm":16,"Seq_nr":37,"Uptime_sec":1238,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T12:25:31.071Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":101,"RSSI_dbm":17,"Seq_nr":39,"Uptime_sec":1306,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:27:05.943Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":42,"Uptime_sec":1409,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:28:06.895Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":17,"Seq_nr":44,"Uptime_sec":1477,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:28:34.532Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":45,"Uptime_sec":1512,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:29:36.606Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":47,"Uptime_sec":1577,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T12:31:10.805Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":50,"Uptime_sec":1683,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:32:40.042Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":109,"RSSI_dbm":17,"Seq_nr":53,"Uptime_sec":1789,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:33:11.44Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":109,"RSSI_dbm":17,"Seq_nr":54,"Uptime_sec":1824,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:34:15.656Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":109,"RSSI_dbm":16,"Seq_nr":56,"Uptime_sec":1896,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T12:35:47.981Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":109,"RSSI_dbm":16,"Seq_nr":59,"Uptime_sec":1997,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T12:36:50.009Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":17,"Seq_nr":61,"Uptime_sec":2067,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T12:37:22.319Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":17,"Seq_nr":62,"Uptime_sec":2102,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:37:54.334Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":63,"Uptime_sec":2138,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:39:27.833Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":66,"Uptime_sec":2241,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:40:00.608Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":67,"Uptime_sec":2276,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:40:33.502Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":68,"Uptime_sec":2312,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:41:00.663Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":69,"Uptime_sec":2347,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:41:32.526Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":221,"RSSI_dbm":16,"Seq_nr":70,"Uptime_sec":2387,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T12:45:56.099Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":223,"RSSI_dbm":16,"Seq_nr":79,"Uptime_sec":2688,"VDD3_mV":2910,"myName":"N101"},{"time":"2016-04-20T12:46:28.624Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":223,"RSSI_dbm":17,"Seq_nr":80,"Uptime_sec":2724,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:46:58.905Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":81,"Uptime_sec":2759,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:47:22.182Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":227,"RSSI_dbm":16,"Seq_nr":82,"Uptime_sec":2790,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:49:27.376Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":224,"RSSI_dbm":16,"Seq_nr":3,"Uptime_sec":93,"VDD3_mV":2909,"myName":"N101"},{"time":"2016-04-20T12:50:30.437Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":224,"RSSI_dbm":17,"Seq_nr":5,"Uptime_sec":162,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:51:01.226Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":224,"RSSI_dbm":15,"Seq_nr":6,"Uptime_sec":197,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T12:51:33.006Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":224,"RSSI_dbm":16,"Seq_nr":7,"Uptime_sec":233,"VDD3_mV":2914,"myName":"N101"},{"time":"2016-04-20T12:57:00.483Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":257,"RSSI_dbm":16,"Seq_nr":18,"Uptime_sec":615,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T12:58:30.571Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":288,"RSSI_dbm":17,"Seq_nr":21,"Uptime_sec":718,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T13:02:02.418Z","Ambient_temp":22,"Chip_temp":30,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":214,"RSSI_dbm":16,"Seq_nr":1,"Uptime_sec":24,"VDD3_mV":2909,"myName":"N101"},{"time":"2016-04-20T13:03:04.468Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":214,"RSSI_dbm":16,"Seq_nr":3,"Uptime_sec":93,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T13:05:59.075Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":214,"RSSI_dbm":16,"Seq_nr":9,"Uptime_sec":295,"VDD3_mV":2912,"myName":"N101"},{"time":"2016-04-20T13:06:30.826Z","Ambient_temp":22,"Chip_temp":29,"Def_route":"fe80::d28c:7bff:fe15:f100","Device_Id":"d08c7b150006","Light_lux":214,"RSSI_dbm":15,"Seq_nr":10,"Uptime_sec":331,"VDD3_mV":2912,"myName":"N101"}]]

    console.log(data);

    var data = data[0];
    console.log(data);

// Set height, width and padding

    var height = 800,
        width = 500,
        padding = 50;

//  Select the div where the new SVG will be appended.
//  Set the height and width
//  Add an SVG group element to the new SVG
//  Give the group element an id of viz (visualization)
//  transform is the attribute to position the g-element within the
//  SVG. So we want the G-element placed 60px down and 60px to the right.

    var viz = d3.select('#viz-wrapper')
        .append('svg')
        .attr('height', height + padding * 2)
        .attr('width', width + padding * 2)
        .append('g')
        .attr('id', 'viz')
        .attr('transform', 'translate(' + padding + ',' + padding +')');


//  We then set up the scales. The xScale is based on time, so we use the
//  so we use the d3.time functions. Then we want to use the scale functionality and
//  then set the range, that is the pixel range that the time will be mapped over,
//  so from 0 to the width of the SVG

//  On the yScale we want a linear range, the values will be just normal values like temp.
//  The 0 value will be mapped to the bottom of the SVG, that is the height, and the max value
//  should be mapped to the top of the screen, 0 px.

    var xScale = d3.time.scale().range([0, width]);
    var yScale = d3.scale.linear().range([height, 0]);

//  We than want to set up an xAxis that show the values.

//  The xAxis should use the xScale to scale it correctly, and be oriented beneath the graph.
//  The ticks is the number of values that will be displayed on the axis.

    var xAxis = d3.svg.axis().scale(xScale)
        .orient('bottom')
        .ticks(20);

    var yAxis = d3.svg.axis().scale(yScale)
        .orient('left')
        .ticks(20);

//  To make sure that all the time values is in the correct format, we can use the built in
//  d3.time.format to have a easy converter tool for our date/time variables.

    var parseTime = d3.time.format.iso;

//  Now all the SVG work is done, and we are ready to bring in the dataset!
//  In this example, we have all our data stored in an csv file.
//  We first want to set up the x and y domain, by checking through the dataset for the max/min values.
//  d3.extent is function that returns a array [min, max], by looping through all data.

    var yDomain = d3.extent(data, function(d) {
        return parseInt(d.Light_lux);
    });

    console.log(d3.max(data, function(d){
        return parseInt(d.Light_lux);
    }));

    console.log(d3.min(data, function(d){
        return parseInt(d.Light_lux);
    }));

//  Because we want to add a month on each side, we don't use extent for the xDomain.

    var xMin = d3.min(data, function(d) {
        var time = parseTime.parse(d.time);
        time.setMinutes(time.getMinutes() - 5);
        return time;
    });

    var xMax = d3.max(data, function(d) {
        var time = parseTime.parse(d.time);
        time.setMinutes(time.getMinutes() + 5);
        return time;
    });

//  Now the x and y domain will be used to calibrate the xScale and yScale
//  so that when we give the scale a value, it will return a correct position
//  in the SVG pixel space.

    xScale.domain([xMin, xMax]);
    yScale.domain(yDomain);

//  Now we want to add the x and y axis to the svg. We do that by first appending a new
//  g-element, and adding an x axis and y axis class to it. We want to move the x-axis down
//  to the bottom of the svg, so the height downwards
//  The call(xAxis) just puts the already defined x-axis into the newly created g-element
//  We then want to rotate the text-elements 65 degrees on the x-axis.

    viz.append('g')
        .attr('class','x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .selectAll('text')
        .attr('transform', function() {
            return 'rotate(-65)'
        })
        .style('text-anchor', 'end')
        .style('font-size', '10px')
        .attr('dx', '-10px')
        .attr('dy', '10px');

    viz.append('g')
        .attr('class', 'y axis')
        .call(yAxis);
//  Now we will finally add the separate data dots. We find all g.dots elements in the
//  group element 'viz' and bind data to each element. We then call enter, which looks in the
//  DOM if the element is there or not. If it is not already there, it will put it in.
//  For every data point, we add a new g-element and set it's class to 'dots'.

    var dots = viz.selectAll('g.dots')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'dots')

//  The group element dots are now going to be positioned in the visualization.
//  The date is set by parsing the time, and then using the xScale to get the
//  pixel cordinate for the element. And the yScale(d.TMAX) gives the y-cordinate
//  The group elements position is then set by the translate attribute and the x and y
//  We then set border stroke (border) and the fill color (background)

    dots.attr('transform', function(d) {
            var date = parseTime.parse(d.time);
            var x = xScale(date);
            var y = yScale(d.Light_lux);
            return 'translate(' + x + ', ' + y + ')';
        })
        .style('stroke', '#00ffd2')
        .style('fill', '#006bff');

//  Then we append a circle element to each group element, with a radius 5

    dots.append('circle')
        .attr('r', 5);

//  We also append a text-element, and the text is fetched from the data. We want the text
//  to be hidden, and be shown when hovering the element

    dots.append('text')
        .text(function(d) {
            return d.Light_lux;
        })
        .attr('display', 'none');

//  When doing mouseover

    dots.on('mouseover', function(d, i){
        var dot = d3.select(this);
        dot.select('text')
            .style('display', 'block');
    });
});
