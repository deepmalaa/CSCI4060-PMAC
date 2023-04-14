import React, { useState, useEffect, useMemo } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import { getUserData } from '../../actions/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllSchemas } from '../../actions/calendar';


const ScheduleAlg = ({ 

    getAllProfile, 
    profile: { profiles }, 
    getAllSchemas,
    getUserData

}) => {
    const [schemas, setSchemas] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
      getAllProfile();
      getAllSchemas().then(data => setSchemas(data));
      getUserData().then(data => setUserInfo(data));
    }, []);
    
    var schedules = schemas;
    var info = userInfo;

    /*
    var schedules = [{"_id":"64370b0dbdff7f571121a571",
    "user":"642bd7ce1a5420643f4b3ab7",
    "title":"asdf",
    "start":"2023-04-12T08:00:00-05:00",
    "end":"2023-04-12T14:30:00-05:00",
    "daysOfWeek":[3],
    "startTime":"08:00",
    "endTime":"14:30",
    "id":"536354149931",
    "__v":0},
    {"_id":"64370b0dbdff7f571121a571",
    "user":"64061172bf34c33e0b09e967",
    "title":"asdf",
    "start":"2023-04-12T09:00:00-05:00",
    "end":"2023-04-12T11:30:00-05:00",
    "daysOfWeek":[3],
    "startTime":"08:00",
    "endTime":"10:30",
    "id":"536354149932",
    "__v":0},
    {"_id":"64370b0dbdff7f571121a57a","user":"64061172bf34c33e0b09e967","title":"asdf","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T11:30:00-05:00","daysOfWeek":[3],"startTime":"09:00","endTime":"11:30","id":"536354149936","__v":0}, {"_id":"64370b0dbdff7f571121a57f","user":"64061172bf34c33e0b09e967","title":"asdf","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T11:30:00-05:00","daysOfWeek":[3],"startTime":"09:00","endTime":"11:30","id":"536354149936","__v":0},{"_id":"6437150087224c1489067584","user":"64061172bf34c33e0b09e967","title":"here","start":"2023-04-13T10:30:00-05:00","end":"2023-04-13T14:30:00-05:00","daysOfWeek":[4],"startTime":"10:30","endTime":"14:30","id":"27516118680","__v":0},{"_id":"6437155a87224c14890675cf","user":"64175657c1f272fb5b492952","title":"A-mon","start":"2023-03-06","end":"2023-03-07","daysOfWeek":[1],"startTime":"18:00","endTime":"18:00","id":"919249237940","__v":0},{"_id":"6437175165d3b70c54b19ea0","user":"64175657c1f272fb5b492952","title":"wed","start":"2023-04-12T11:00:00-05:00","end":"2023-04-12T12:30:00-05:00","daysOfWeek":[3],"startTime":"11:00","endTime":"12:30","id":"859306392035","__v":0},
    {"_id":"6437177265d3b70c54b19eb0","user":"64370069d780f6a0e4bec8ae","title":"nice","start":"2023-04-13T11:30:00-05:00","end":"2023-04-13T14:30:00-05:00","daysOfWeek":[4],"startTime":"11:30","endTime":"14:30","id":"488350801316","__v":0},

    {"_id":"6437177265d3b70c54b19eb1","user":"64370069d780f6a0e4bec8ae","title":"nice","start":"2023-04-12T08:00:00-05:00","end":"2023-04-12T12:30:00-05:00","daysOfWeek":[4],"startTime":"11:30","endTime":"14:30","id":"488350801316","__v":0},

    {"_id":"6437177265d3b70c54b19eb2","user":"64370069d780f6a0e4bec8ae","title":"nice","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T12:30:00-05:00","daysOfWeek":[4],"startTime":"11:30","endTime":"14:30","id":"488350801316","__v":0},

    {"_id":"6437177265d3b70c54b19eb3","user":"64370069d780f6a0e4bec8ae","title":"nice","start":"2023-04-12T08:00:00-05:00","end":"2023-04-12T12:00:00-05:00","daysOfWeek":[4],"startTime":"11:30","endTime":"14:30","id":"488350801316","__v":0},

    {"_id":"643717ad65d3b70c54b19edb","user":"64175657c1f272fb5b492952","title":"thurs","start":"2023-04-13T09:30:00-05:00","end":"2023-04-13T11:00:00-05:00","daysOfWeek":[4],"startTime":"09:30","endTime":"11:00","id":"995913715892","__v":0},{"_id":"6438bbcdff4b658be33c9849","user":"64175657c1f272fb5b492952","title":"asdf","start":"2023-04-14T11:00:00-05:00","end":"2023-04-14T14:00:00-05:00","daysOfWeek":[5],"startTime":"11:00","endTime":"14:00","id":"652595765589","__v":0},{"_id":"64370b0dbdff7f571121a111","user":"642bd7ce1a5420643f4b3ab7","title":"asdf","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T11:30:00-05:00","daysOfWeek":[3],"startTime":"09:00","endTime":"11:30","id":"536354149926","__v":0}];



    var info = [{"_id":"63e47ef785eb87542f32742c","name":"Deepmala Bhomi","email":"bhomidddd@warhawks.ulm.edu","password":"$2a$10$S7LQqg1GXREUz.tC7Qje4eL2bT4hRABrd9M1f7aUY5MzV.eKUtXk2","type":"Student","date":"2023-02-09T05:04:55.633Z","__v":0},{"_id":"63e4805c85eb87542f327433","name":"student_tester","email":"sty@test.com","password":"$2a$10$M5xNILQMLgihDofHIIExBu6MoxGOrZkULieLreYz7CPRdvz2VrJu.","type":"Faculty","date":"2023-02-09T05:10:52.894Z","__v":0},{"_id":"63ebdaa035b4d979894476c7","name":"Madi","email":"Student@icloud.com","password":"$2a$10$k3ECL8.7oVOYWocGWveaHeoUcar7rVWRDaPI5Se4t9eNToGTI66qq","type":"","date":"2023-02-14T19:01:52.359Z","__v":0},{"_id":"63ebdae935b4d979894476d1","name":"Madi","email":"Falculty@icloud.com","password":"$2a$10$Jwo2gkrdUzTRmAjKmmlxxuTrF1FMVNTxUD6NBp8fB6iJVGc8EEBWK","type":"Faculty","date":"2023-02-14T19:03:05.367Z","__v":0},{"_id":"63ebdbde35b4d979894476ed","name":"Studenttest","email":"studetest@test.com","password":"$2a$10$IkhEnJInby7ia8P6HBn.XOohSxzxgL0rYQh0wJKq/wzszNDXCbLRu","type":"","date":"2023-02-14T19:07:10.443Z","__v":0},{"_id":"63ebdc4335b4d979894476f1","name":"Madi","email":"test@test.com","password":"$2a$10$jdHxXUNfSzm5r7pAsKlOROVg4Wz1TB9YJauiFM9t60d055hXSxSLm","type":"","date":"2023-02-14T19:08:51.217Z","__v":0},{"_id":"63ebdcc635b4d979894476f6","name":"Test","email":"faculty1@gmail.com","password":"$2a$10$4iKN5C3hLY5GqZzSuSuuL.gBtnBTcxQxCHjgCsSjVbz/3oIVPG8x2","type":"Faculty","date":"2023-02-14T19:11:02.586Z","__v":0},{"_id":"63ebe01e35b4d97989447705","name":"student1","email":"student1@test.com","password":"$2a$10$3f3MSHZSOtxp3XQRegK5i.LBwfm9dQPWXzW/EJb1zs1ZJLOkCD2Zq","type":"","date":"2023-02-14T19:25:18.525Z","__v":0},{"_id":"63ebe4e73396355afad27745","name":"Deepmala Bhomi","email":"stude@tester.com","password":"$2a$10$kHUL1k87pvIW3vpods/MqOXh8.UDRCS/AzSRzdYA0ABSxTeKc8Pn.","type":"Student","date":"2023-02-14T19:45:43.959Z","__v":0},{"_id":"63f66881037a2d5865bd3080","name":"Jessie","email":"danalynnhendrix@gmail.com","password":"$2a$10$jS84AVeo/gxooEozNeMvZueLhDjvXV7Yajpxjb9m13n7nChVp/qgy","type":"","date":"2023-02-22T19:09:53.141Z","__v":0},{"_id":"63f7c6550c1af1b60697240e","name":"admin","email":"lalala@test.com","password":"$2a$10$8gHNxHWVE7DwLJa/o0q.huGUKrWi8IPsS/n1xD9bE0JZ9pKpWoklu","type":"Student","date":"2023-02-23T20:02:29.526Z","__v":0},{"_id":"64001db4037a2d5865bd30a1","name":"Person","email":"email@email.com","password":"$2a$10$olu.8glH67mdaRFNQTBZquEv/JbphcPF6XHdh7vy/RBqretCMZle.","type":"Faculty","date":"2023-03-02T03:53:24.469Z","__v":0},{"_id":"6400d0f5037a2d5865bd30e5","name":"Bryan","email":"faculty@yahoo.com","password":"$2a$10$k3sSIWocF2PRzccW5k8PgutmCyXCn.JNWyZRgqH0ifjdCupwr80A6","type":"Faculty","date":"2023-03-02T16:38:13.371Z","__v":0},{"_id":"640133e8037a2d5865bd3121","name":"b","email":"student@yahoo.com","password":"$2a$10$CxX0Fwx2QaxMc3wL4dZo1O43VsWPiLSaHIrFxV7l7K6qTOHopCYXW","type":"Student","date":"2023-03-02T23:40:24.642Z","__v":0},{"_id":"64015bb4037a2d5865bd31b1","name":"a","email":"faculty@gmail.com","password":"$2a$10$ZP8J1VmfodkVeKBQsRV/Z.O0ts9gKv8t.zNQ70JkkDaefrqagq2LK","type":"Faculty","date":"2023-03-03T02:30:12.024Z","__v":0},{"_id":"6403c2fc037a2d5865bd3271","name":"b","email":"student@student.com","password":"$2a$10$amc1FZixbHSkGtvRrKxOeuMFR4jjNG7I9M1asRzjlS1cqb1CM8oiy","type":"Student","date":"2023-03-04T22:15:24.108Z","__v":0},{"_id":"6403e780037a2d5865bd328f","name":"s","email":"sdafsdf@lkajs.com","password":"$2a$10$9VyWKbqhjmtps98/TBEiz..MPi2DOLYQ1bwVR/bayo.dXw6qRXrgW","type":"Student","date":"2023-03-05T00:51:12.885Z","__v":0},{"_id":"6403f37e037a2d5865bd3293","name":"CanISeeThisInDB","email":"db@yahoo.com","password":"$2a$10$.tW/AIEIntwpdssfCqv5v.mZaZC/AsJLdJG/OjOPXjQTSTwPKe53u","type":"Student","date":"2023-03-05T01:42:22.462Z","__v":0},{"_id":"6403f546037a2d5865bd3297","name":"","email":"admin@email.com","password":"12345678","type":"admin","date":"2023-03-05T01:49:58.817Z","__v":0},{"_id":"64051ada22dff9505bcceba3","name":"Deepmala Bhomi","email":"bhomiddddd@warhawks.ulm.edu","password":"$2a$10$SE/.AHqucgsV81Ah1C392.GEhXS3rAUvmgLQcmHd60PqUu.Ol4FLS","type":"Student","date":"2023-03-05T22:42:34.123Z","__v":0},{"_id":"640557ca037a2d5865bd32c0","name":"s","email":"bryanedwards3@yahoo.com","password":"$2a$10$mJGXzQf6PpPAkZU7sgHuMuhZ/5W1tr6jWRiig4cXyLQ.c/JfNfX9.","type":"","date":"2023-03-06T03:02:34.803Z","__v":0},{"_id":"6405580e037a2d5865bd32c4","name":"b","email":"idk@idk.com","password":"$2a$10$7TX5SnsxwLLfCXcE1.xaZORyrEnyqin1HDQzn1bN/Zq.L7I8nFWPe","type":"","date":"2023-03-06T03:03:42.995Z","__v":0},{"_id":"640562daf63b6238708db2c2","name":"a","email":"a@a.com","password":"$2a$10$gN73GKJYLdIYDXV2HjSeFejfQm6U49if3kLKp98o8QZ75c/iblxMC","type":"Student","date":"2023-03-06T03:49:46.429Z","__v":0},{"_id":"64056810f63b6238708db2d9","name":"Abram Sims","email":"email1@email.com","password":"$2a$10$einYATH0IQOFVtw/YsVjWuMbHp7YszS1n.PZwxKFVHOEjKuzRKNfW","type":"Student","date":"2023-03-06T04:12:00.106Z","__v":0},{"_id":"6405700ff63b6238708db318","name":"BryanE","email":"bryanE@yahoo.com","password":"$2a$10$rjzSjT4VnXTmdChP1JU0SeYiE7bIOzjyKlu6U2o3XqYCy3AT.k24K","type":"Student","date":"2023-03-06T04:46:07.664Z","__v":0},{"_id":"64057a48f63b6238708db350","name":"TestingIFNodeWorks","email":"bryan@yahoo.com","password":"$2a$10$5Hy4Vwt6QtTvHBmAAA36g.7r.D1s6XkvdKcjy5ogGGEUa7UWn/gbi","type":"Faculty","date":"2023-03-06T05:29:44.833Z","__v":0},{"_id":"64061172bf34c33e0b09e967","name":"OfficialTest","email":"official@official.com","password":"$2a$10$W7C0gO0ZNF/pyiP2YT7dOuMy.i9frr1UgxyVkExOMzK80FoUJGmpq","type":"Student","date":"2023-03-06T16:14:42.108Z","__v":0},{"_id":"64061815bf34c33e0b09e970","name":"Madi","email":"Madi@icloud.com","password":"$2a$10$KZAppUMNn95wb0sM6m/3.eNlzMA/ujWT6LrdHHJzpha21szEtNHN2","type":"Student","date":"2023-03-06T16:43:01.228Z","__v":0},{"_id":"6406278dbf34c33e0b09e992","name":"ss","email":"ss1@email.com","password":"$2a$10$y0/4xPyRqHzXp0N9D1RZ4.0z.135uGooMxCxkS7BiKagSsAVhW0Tu","type":"Student","date":"2023-03-06T17:49:01.133Z","__v":0},{"_id":"64062847bf34c33e0b09e9a0","name":"ss2","email":"ss2@email.com","password":"$2a$10$px0yR4FDrDsp025x8t3AGeU6jAncKCrihj/1KWH.igzXe2QgICw9K","type":"Faculty","date":"2023-03-06T17:52:07.904Z","__v":0},{"_id":"64062896bf34c33e0b09e9be","name":"ss3","email":"ss3@email.com","password":"$2a$10$FaAG8JVSelHTIr2voilgluAMdYTMZs5Ix4WwmhCxnGRJvf/e1Msei","type":"Committe","date":"2023-03-06T17:53:26.957Z","__v":0},{"_id":"64062a87bf34c33e0b09e9fe","name":"ss4","email":"ss4@email.com","password":"$2a$10$t3qaNXRRRjRqfDAukpZcQOmVYqNaUlcF3YHoTvtmfg2baWW5LtALa","type":"Student","date":"2023-03-06T18:01:43.773Z","__v":0},{"_id":"64063226aafdb639481a8560","name":"Suman","email":"sumanshumn@gmail.com","password":"$2a$10$J2qWKLap8QhzQRz7j1JCue33dxU1p7C1DRziD0iE1nO6LoGzOgH.6","type":"Student","date":"2023-03-06T18:34:14.240Z","__v":0},{"_id":"64063a4928d98ba419f642fb","name":"admin","email":"lalal@lalal.com","password":"$2a$10$Sy086OViogNfHIFYNSV9leezaL15EIDdv/xop/UZnKBYG9f1OxmOW","type":"Faculty","date":"2023-03-06T19:08:57.308Z","__v":0},{"_id":"64063ed1d0beb0f7849ee981","name":"admin","email":"test@www.com","password":"$2a$10$M9rWMBeNERk.rSx9Cv4ebevjRoaOvP62wh7Ns9j/s95LRk/LqaEeO","type":"Student","date":"2023-03-06T19:28:17.065Z","__v":0},{"_id":"64066872356ee98a7117e956","name":"a","email":"a@email.com","password":"$2a$10$kR5mS4XV.Z03f557uEYLNekMlHDMM0UMY6GYZIMCzl16EuHWp5Uve","type":"Faculty","date":"2023-03-06T22:25:54.273Z","__v":0},{"_id":"64066896356ee98a7117e960","name":"a","email":"student@email.com","password":"$2a$10$8rtMa1aFQLeApd8WnQLL1e/I9wNVlvFyhZLdtVMN.sASLZE6OT5mS","type":"Student","date":"2023-03-06T22:26:30.045Z","__v":0},{"_id":"64066c45c085c1269545ec04","name":"Madi","email":"Madi@cloud.com","password":"$2a$10$qadNCS8VzQrBVzwogFvg8uI9xJkJEVHJsHd9II4/aPxBKz7gVpr4O","type":"Student","date":"2023-03-06T22:42:13.814Z","__v":0},{"_id":"64066fc1356ee98a7117e990","name":"working","email":"working@working.com","password":"$2a$10$LcaWxW77V5PtcwVSZaCEZOZ4/oznP46Brf0993M9ge97Lb8Kd8Px6","type":"Student","date":"2023-03-06T22:57:05.318Z","__v":0},{"_id":"640675c3356ee98a7117e99d","name":"asdf","email":"a@emial.com","password":"$2a$10$8J2nWm2i2Nj/b8qTbivgCOXS.TnXl/wxJGkrKi63UW7BqUGR65pzy","type":"Student","date":"2023-03-06T23:22:43.810Z","__v":0},{"_id":"64069f0e356ee98a7117ea5f","name":"csstest","email":"css@email.com","password":"$2a$10$R9SaPm.X2cv4zcaXvMcPYuOCzCUxOR8WMP3Vgt5mU2Dl6eIcrq93y","type":"Student","date":"2023-03-07T02:18:54.590Z","__v":0},{"_id":"6406b68b356ee98a7117eaf8","name":"TestingCSS","email":"testingCSS@css.com","password":"$2a$10$nvDO6.YMc3tgwpD9/aHI5uzhkLylI015lwXCZhJJI8knxqHXwl6nq","type":"Student","date":"2023-03-07T03:59:07.781Z","__v":0},{"_id":"6406d286356ee98a7117eb2b","name":"faculty","email":"faculty@faculty.com","password":"$2a$10$8gQ4k7u8MDElTm9c7ybttOW9EkuEaw5APk.B3Jdx.dWLjduROQl3C","type":"Faculty","date":"2023-03-07T05:58:30.700Z","__v":0},{"_id":"6406dfce356ee98a7117ebac","name":"I hope this works","email":"Ihopethisworks@emial.com","password":"$2a$10$RXRPB7kYumwVoutbSJx7jODvlISYy7hgP2XsWPtSrDlNAOntMvbx.","type":"Faculty","date":"2023-03-07T06:55:10.412Z","__v":0},{"_id":"6406e00d356ee98a7117ebb0","name":"Ihopethisworks","email":"Ihopethis@email.com","password":"$2a$10$SL/fnb/tn9TL99FVg.qNuOXh7RWKnPDLjX3tjVk0H92jkEEO1joUC","type":"Student","date":"2023-03-07T06:56:13.469Z","__v":0},{"_id":"6406e6a7356ee98a7117ebe1","name":"Idkman","email":"idkman@idkman.com","password":"$2a$10$qzYffnBG6EO567JCLa7YFOQbCQZXVEfkNmUiJ7lQg9TfONHgTTgvu","type":"Student","date":"2023-03-07T07:24:23.993Z","__v":0},{"_id":"640788b360e90cbb1723f5e0","name":"Dr.Wied","email":"testing@test.com","password":"$2a$10$SaC57nA3HkKSH1RvIvOJj.bCj5oaEYYoCJsVbX/ZYDnf/eGkq1Exi","type":"Student","date":"2023-03-07T18:55:47.919Z","__v":0},{"_id":"640a736ac1f272fb5b491f16","name":"ss3","email":"ss3.1@email.com","password":"$2a$10$gYXOjxhc8CV5Ij2gJjO6IOfYrs1r7pJC1ckSI4Xt8rVXZDnQQ0ARK","type":"Committe","date":"2023-03-10T00:01:46.473Z","__v":0},{"_id":"640ce464c1f272fb5b491f4f","name":"idk","email":"idk@idk1.com","password":"$2a$10$f1sVQ12cpNcSkfBabfAXvOO8ew.ak0B953uSACflz/LH3IFTqeEmC","type":"Student","date":"2023-03-11T20:28:20.796Z","__v":0},{"_id":"64167bfcc1f272fb5b492495","name":"Deepmala Bhomi","email":"deepmala.bhomi@gmail.com","password":"$2a$10$zU.8KiWDNsb4OqJskN6uM.WQUFlcMYexc2gXovrodnLZ4BJBfbCLa","type":"Student","date":"2023-03-19T03:05:32.338Z","__v":0},{"_id":"64169d23c1f272fb5b4928d8","name":"me","email":"me@me.com","password":"$2a$10$2Hg7e6uCoixVrOstZkQMtO7bHMkh1U1E/737or5N6WcmrOUXC06zW","type":"Student","date":"2023-03-19T05:26:59.720Z","__v":0},{"_id":"64175657c1f272fb5b492952","name":"person","email":"email3@email.com","password":"$2a$10$AdvayEaLp5bq4KGJLTGm8eqMo5itE82aqZYi3K6vbgUBC8fNkxZci","type":"Student","date":"2023-03-19T18:37:11.900Z","__v":0},{"_id":"6417ac52c1f272fb5b4929f3","name":"BryanCommittee","email":"committee@committee.com","password":"$2a$10$gy8Zx7y6JXqkjMm/SFiWnuKfEMvK86ElTF469L3YZwMy28KXJFmeO","type":"Committe","date":"2023-03-20T00:44:02.460Z","__v":0},{"_id":"6417ae92c1f272fb5b492a2a","name":"com","email":"committe@ulm.edu","password":"$2a$10$SEtj/0kBPXGmHUcV0pI2Set2a2jDqBYN2hgTwXmbQQcac2JSJi31G","type":"Committe","date":"2023-03-20T00:53:38.619Z","__v":0},{"_id":"6417aec4c1f272fb5b492a31","name":"test","email":"test7@test.com","password":"$2a$10$EB7aUWpQ7q1NNID5/6jmxesFqERPyAwMMAqBT4WuO0.91hmtJLHcm","type":"Committee","date":"2023-03-20T00:54:28.746Z","__v":0},{"_id":"6417b12cc1f272fb5b492a49","name":"committee","email":"comittee@c.com","password":"$2a$10$h5D7Dr8.olt1zkm1vabejuLIaMzsU4aM3qlLZxhH/sdmP49kcGbZa","type":"Committee","date":"2023-03-20T01:04:44.416Z","__v":0},{"_id":"6417b183c1f272fb5b492a56","name":"1234","email":"committeee@committeee.com","password":"$2a$10$sU55CtGyMmCPr0Out/LQH.Tf.EFXTGb/6iB4p9jZWHx5/9q5HLKhK","type":"Committee","date":"2023-03-20T01:06:11.002Z","__v":0},{"_id":"641a83bac1f272fb5b492d4a","name":"Bryan","email":"big@big.com","password":"$2a$10$w2dRdW1W6TMXeDrT84ZwAeGW9KGLQ3UN2mT/O01rY/POPpdelOZC.","type":"Student","date":"2023-03-22T04:27:38.495Z","__v":0},{"_id":"641b552dc1f272fb5b492dc6","name":"madi","email":"madi@icloud.com","password":"$2a$10$8MBlscZTfFhYCQ45PUOSXuu4ff4daqtpKCxigQjtllmZjrtkj8m7m","type":"Student","date":"2023-03-22T19:21:17.626Z","__v":0},{"_id":"641c9fa26339e52177c82dcc","name":"fs","email":"ghgh@yahoo.com","password":"$2a$10$7dtPsjiF27LmFZvyoxFBieeJn1oGiEQIqHhevj/KWdmtNuyHKjhbK","type":"Student","date":"2023-03-23T18:51:14.858Z","__v":0},{"_id":"641ca0a66339e52177c82e17","name":"test","email":"meel@meel.com","password":"$2a$10$3oUzvZExRm46fF3cvFeQsecQ307jwQuFrmMYhi0h.QPTU5ANX9Xci","type":"Student","date":"2023-03-23T18:55:34.547Z","__v":0},{"_id":"641ca0a7cabb832719909f76","name":"madi","email":"apple@cloud.com","password":"$2a$10$bmm30KE8cKdGkNl3W38FHOLhAHo03lFa7OmW2gXHxzW2Ow3BcqS32","type":"Student","date":"2023-03-23T18:55:35.979Z","__v":0},{"_id":"641cc2c7a281c9d3c2a86736","name":"Deepmala Bhomi","email":"autherror@gmail.com","password":"$2a$10$WHLW6L0HN/JPKteb5SDZWORgItDw.KGlBORVr6gqDgVGLzTmH.Rbq","type":"Committee","date":"2023-03-23T21:21:11.367Z","__v":0},{"_id":"641cf163c5676bd3688987fa","name":"Deepmala Bhomi","email":"com@itte.com","password":"$2a$10$mM05q9DUFpWzBMqX.bkl9eeTIC8MdY35owfkyeveh/DC41gRLrsMq","type":"Committee","date":"2023-03-24T00:40:03.169Z","__v":0},{"_id":"6421ebc25617ce620daf2acb","name":"ss31","email":"ss31@email.com","password":"$2a$10$Eez6DQoHP.VMf18QX8OP/exxsWnQLKlSAjbeAIKtPsbBwmgEGqhoi","type":"Committee","date":"2023-03-27T19:17:22.223Z","__v":0},{"_id":"6429eb1de64bf06db1e54e84","name":"Comm","email":"email44@email.com","password":"$2a$10$PBkFz9tf6PDKLw1DoTSdau4q9QGfwmf8bL.V7FA3eJtTvgCEoVJQ.","type":"Committee","date":"2023-04-02T20:52:45.181Z","__v":0},{"_id":"642bd7ce1a5420643f4b3ab7","name":"Chair","email":"chair@email.com","password":"$2a$10$y0/4xPyRqHzXp0N9D1RZ4.0z.135uGooMxCxkS7BiKagSsAVhW0Tu","type":"admin","date":"2023-03-06T17:49:01.133Z","__v":0},{"_id":"6434a977b05a264fdde2b22c","name":"asdf","email":"thisemail@email.com","password":"$2a$10$xUL110Csfv4WMhbynv0zG.GL6SN3Sr2w8h8jMFFm/57BxJO1Y3pJC","type":"Committee","date":"2023-04-11T00:27:35.386Z","__v":0},{"_id":"6435cd028486024f9e485e7f","name":"madi","email":"madih@icloud.com","password":"$2a$10$M0VgcXRajnK1K.TgzWn3POX927WuN9daah2cgnGyrntdv4OL2zUEu","type":"Student","date":"2023-04-11T21:11:30.244Z","__v":0},{"_id":"6436fb95cebb2d0d6a491453","name":"Bryan","email":"com@com.com","password":"$2a$10$THvFOEKsK8ZuDrXPcD9vwOd4y6M7ow3qZqh4iosHkA0Pu3BYSUWgi","type":"Committee","date":"2023-04-12T18:42:29.420Z","__v":0},{"_id":"64370069d780f6a0e4bec8ae","name":"asdf","email":"email111@email.com","password":"$2a$10$JSwUYldvwUm2LMDd3XyKj.qj5FOJx/nkng/MyXrG/ebiIhT5JG7Om","type":"Committee","date":"2023-04-12T19:03:05.466Z","__v":0}];
    
    */

    const timeSlots = useMemo(() => generateTimeSlot(schemas, schedules, info), []);
      
    

    // Function to find available slots for admin, at least three committee members, and all potential students that meet availability
    
    function generateTimeSlot(schemas, schedules, info) {

        // Stores scheduled events based on user type
        var student = [];
        var committee = [];
        var admin = [];
        var events = [];
        // Stores data of time slot for meeting
        

        // Separates schedule events by user type
        for (let i = 0; i < schedules.length; i++) {
            
            for (let j = 0; j < info.length; j++) {
                
                if (info[j]._id === schedules[i].user) {
                
                    if (info[j].type === "Student") {
                        student.push(schedules[i]);
                    }
                    if (info[j].type === "Committee") {
                        committee.push(schedules[i]);
                    }
                    if (info[j].type === "admin") {
                        admin.push(schedules[i]);
                    }
                }
                
            }
        }

        //console.log(student);
        //console.log(admin[0]);
        //console.log(committee);

        // Loop through all admin events (this saves time as it does not check days admin can not make)
        console.log("Admin start");
        for (let j = 0; j < admin.length; j++) {
            const eventStartTime = new Date(admin[j].start);
            const eventEndTime = new Date(admin[j].end);
            const timeSlotDuration = 90; // minutes
            var timeSlotStart = eventStartTime;
            
            // Loops through all potential time slots of event
            
            while (timeSlotStart.getTime() + timeSlotDuration * 60000 <= eventEndTime.getTime()) {
                console.log("Time select");

                const timeSlotEnd = new Date(timeSlotStart.getTime() + timeSlotDuration * 60000); // convert minutes to milliseconds

                // Stores available members
                var availableCommittee = [];
                var availableStudents = [];
                
                // For all committee members events
                availableCommittee = [];
                for (let i = 0; i < committee.length; i++) {
                    console.log("Committee Member Start");
                    const comitStart = new Date(committee[i].start);
                    const comitEnd = new Date(committee[i].end);

                    // Checks if time slot fits committees availability
                    if(comitStart <= timeSlotStart && comitEnd >= timeSlotEnd) {
                        availableCommittee.push(committee[i]);
                    }
                }
                
                // Only checks students if at least 3 committee members and the admin can attend
                console.log(availableCommittee.length)
                if(availableCommittee.length >= 3) {
                    console.log("Three there was")
                    // For all students schedules
                    
                    availableStudents = [];
                    for (let x = 0; x < student.length; x++) {
                        console.log("Student start");
                        
                        const studStart = new Date(student[x].start);
                        const studEnd = new Date(student[x].end);
                        
                        // Checks if time slot fits student availability
                        if(studStart <= timeSlotStart && studEnd >= timeSlotEnd) {
                            availableStudents.push(student[x]);
                            console.log("push is made")
                            console.log(studStart)
                            console.log(timeSlotStart)
                            console.log(timeSlotEnd)
                            console.log(studEnd)
                            

                        }
                        console.log("End this student");
                    }

                    if(availableStudents.length > 0) {
                        events.push([timeSlotStart, timeSlotEnd, availableCommittee, availableStudents]);
                    }
                }
                
                
                
                timeSlotStart = new Date(timeSlotStart.getTime() + 30 * 60000); // increment by 30 minutes
            }
            
        }

        console.log(events)
    }   
    
    console.log("COMPLETE END")
    
    
    return (

        <>
        <div>
            
            <h1>
                
                    test
                
            </h1>

        </div>
        
        </>

        );
    }


    ScheduleAlg.propTypes = {
        profile: PropTypes.object.isRequired,
        getAllProfile: PropTypes.func.isRequired,
        getAllSchemas: PropTypes.func.isRequired,
        getUserData: PropTypes.func.isRequired
      };
      
      const mapStateToProps = (state) => ({
        profile: state.profile,
        auth: state.auth,
        
      });
      
      export default connect(mapStateToProps, { getAllProfile, getAllSchemas, getUserData})(
        ScheduleAlg
      );