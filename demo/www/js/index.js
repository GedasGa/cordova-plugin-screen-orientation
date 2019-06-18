/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        const btnPortrait = document.getElementById('btnPortrait');
        const btnLandscape = document.getElementById('btnLandscape');
        const btnPortPrimary = document.getElementById('btnPortPrimary');
        const btnLandPrimary = document.getElementById('btnLandPrimary');
        const btnAny = document.getElementById('btnAny');

        btnPortrait.addEventListener('click', function () {
            window.screen.orientation.lock('portrait').then(function (obj) {
                console.log(obj);
            }, function (obj) {
                console.log(obj);
            });
        });
        btnLandscape.addEventListener('click', function () {
            window.screen.orientation.lock('landscape').then(function (obj) {
                console.log(obj);
            }, function (obj) {
                console.log(obj);
            });
        });
        btnPortPrimary.addEventListener('click', function () {
            window.screen.orientation.lock('portrait-primary').then(function (obj) {
                console.log(obj);
            }, function (obj) {
                console.log(obj);
            });
        });
        btnLandPrimary.addEventListener('click', function () {
            window.screen.orientation.lock('landscape-primary').then(function (obj) {
                console.log(obj);
            }, function (obj) {
                console.log(obj);
            });
        });
        btnAny.addEventListener('click', function () {
            window.screen.orientation.unlock();
        });

        var hasOnChange = false;
        const btnOnchange = document.getElementById('btnOnchange');
        btnOnchange.addEventListener('click', function () {
            if (hasOnChange) {
                window.screen.orientation.onchange = undefined;
                btnOnchange.innerText = 'assign onchange';
            } else {
                window.screen.orientation.onchange = myFunction1;
                btnOnchange.innerText = 'remove onchange';
            }
            hasOnChange = !hasOnChange;
        });

        var hasListener = false;
        const btnAddEvtListener = document.getElementById('btnAddEvtListener');
        btnAddEvtListener.addEventListener('click', function () {
            if (hasListener) {
                window.screen.orientation.removeEventListener('change', myFunction2);
                btnAddEvtListener.innerText = 'addEventListener';
            } else {
                window.screen.orientation.addEventListener('change', myFunction2);
                btnAddEvtListener.innerText = 'remEventListener';
            }
            hasListener = !hasListener;
        });

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function myFunction1 () {
    window.alert('This change listener uses window.screen.orientation.onchange');
}

function myFunction2 () {
    window.alert('This change listener uses window.screen.orientation.addEventListener');
}

app.initialize();
