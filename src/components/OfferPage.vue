<template>
    <v-container fluid class="pa-0 ma-0" id="main-container">
        <v-layout row wrap>
            <v-flex class="light-bg skewbg">
            </v-flex>
            <v-layout row wrap>
                <v-flex lg6 class="zindex1">
                    <v-layout row wrap class="pt-5">
                        <v-flex xs4>

                        </v-flex>
                        <v-flex xs6>
                            <img src="../assets/ars-creo-logo.png" />

                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pt-5 header-content">

                    </v-layout>
                </v-flex>
                <v-flex lg6 class="dark-bg text-lg-right mt-5 pt-5 right-side">
                    <v-layout row wrap class="pa-5">
                        <h1>Oferta - strony internetowe</h1>
                    </v-layout>
                </v-flex>
                <v-flex>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex v-for="i in itemsPackets" xs12 lg4 pa-1 >
                                <v-card dark color="dark">
                                    <v-toolbar>
                                        <v-icon>{{ i.icon }}</v-icon>
                                        <v-toolbar-title>{{ i.title }}</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-toolbar-side-icon v-on:click="showItem(i)"></v-toolbar-side-icon>
                                    </v-toolbar>
                                    <v-expand-transition>
                                        <v-card
                                                v-show="i.seen"
                                                class="mx-auto"
                                        >
                                            <v-list one-line>
                                                <template>
                                                    <v-list-tile v-for="li in i.list">
                                                        <v-list-tile-avatar>
                                                            <v-icon v-bind:class="li.iconColor" >{{ li.icon}}</v-icon>
                                                        </v-list-tile-avatar>
                                                        <v-list-tile-title>
                                                            {{ li.elem }}
                                                        </v-list-tile-title>
                                                    </v-list-tile>
                                                </template>
                                            </v-list>
                                        </v-card>
                                    </v-expand-transition>
                                    <v-card-title primary-title>
                                        <v-icon class="mr-2">monetization_on</v-icon>
                                        <h3>Cena:</h3>
                                        <v-spacer></v-spacer>
                                        <h1>{{ i.price }} zł netto</h1>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                            <v-flex class="blue ma-1 pa-3">
                                <v-divider class="white"></v-divider>
                                <blockquote class="blockquote white--text">
                                    Każdy projekt, niezależnie od wybranego pakietu,
                                    posiada indywidualny projekt graficzny, dopasowany do potrzeb Państwa firmy.
                                    Nasz zespół wykwalifikowanych specjalistów podchodzi profesjonalnie do każdego zadania. Po zakończeniu realizacji otrzymują Państwo wsparcie techniczne oraz pomoc w obsłudze strony.
                                    <br/>Zachęcamy do skorzystania z naszych usług.
                                    <v-icon class="white--text">mood</v-icon>
                                </blockquote>
                                <v-divider class="white"></v-divider>

                            </v-flex>

                        </v-layout>

                    </v-container>
                </v-flex>
            </v-layout>
        </v-layout>



        <v-footer class="pa-3 mt-3" fixed>
            <v-spacer></v-spacer>
            <div>Ars-Creo &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        methods: {
            showItem(item) {

                this.itemsPackets.forEach(function(index){
                    if(index != item){
                        index.seen = false;
                    }
                });
                item.seen = !item.seen;
            }
        },
        name: "OfferPage",
        data () {
            return {
                itemsPackets: [
                    {
                        title: 'Pakiet podstawowy',
                        icon: 'schedule',
                        seen: false,
                        price: "999",
                        list: [
                            { elem: "Indywidualny projekt graficzny", icon: "done", iconColor: "green--text" },
                            { elem: "Strona responsywna", icon: "done", iconColor: "green--text" },
                            { elem: "HTML5/CSS3", icon: "done", iconColor: "green--text" },
                            { elem: "darmowy hosting 1-wszy rok", icon: "done", iconColor: "green--text" },
                            { elem: "mapa google", icon: "done", iconColor: "green--text" },
                            { elem: "Panel CMS", icon: "clear", iconColor: "red--text" },
                            { elem: "Galeria zdjęć", icon: "clear", iconColor: "red--text" },
                            { elem: "Wiele podstron", icon: "clear", iconColor: "red--text" },
                            { elem: "Idywidualne dodatki (ikony, el. graf.)", icon: "clear", iconColor: "red--text" },
                            { elem: "Certyfikat SSL", icon: "clear", iconColor: "red--text" },
                            { elem: "Dopasowanie treści", icon: "clear", iconColor: "red--text" },
                        ]
                    },
                    { title: 'Pakiet rozszerzony',
                        icon: 'note_add',
                        seen: false,
                        price: "1 590",
                        list: [
                            { elem: "Indywidualny projekt graficzny", icon: "done", iconColor: "green--text" },
                            { elem: "Strona responsywna", icon: "done", iconColor: "green--text" },
                            { elem: "HTML5/CSS3", icon: "done", iconColor: "green--text" },
                            { elem: "darmowy hosting 1-wszy rok", icon: "done", iconColor: "green--text" },
                            { elem: "mapa google", icon: "done", iconColor: "green--text" },
                            { elem: "Panel CMS", icon: "done", iconColor: "green--text" },
                            { elem: "Galeria zdjęć", icon: "done", iconColor: "green--text" },
                            { elem: "Wiele podstron", icon: "done", iconColor: "green--text" },
                            { elem: "Idywidualne dodatki (ikony, el. graf.)", icon: "clear", iconColor: "red--text" },
                            { elem: "Certyfikat SSL", icon: "clear", iconColor: "red--text" },
                            { elem: "Dopasowanie treści", icon: "clear", iconColor: "red--text" },
                        ]
                    },
                    { title: 'Pakiet premium',
                        icon: 'grade',
                        seen: false,
                        price: "2 790",
                        list: [
                            { elem: "Indywidualny projekt graficzny", icon: "done", iconColor: "green--text" },
                            { elem: "Strona responsywna", icon: "done", iconColor: "green--text" },
                            { elem: "HTML5/CSS3", icon: "done", iconColor: "green--text" },
                            { elem: "darmowy hosting 1-wszy rok", icon: "done", iconColor: "green--text" },
                            { elem: "mapa google", icon: "done", iconColor: "green--text" },
                            { elem: "Panel CMS", icon: "done", iconColor: "green--text" },
                            { elem: "Galeria zdjęć", icon: "done", iconColor: "green--text" },
                            { elem: "Wiele podstron", icon: "done", iconColor: "green--text" },
                            { elem: "Idywidualne dodatki (ikony, el. graf.)", icon: "done", iconColor: "green--text" },
                            { elem: "Certyfikat SSL", icon: "done", iconColor: "green--text" },
                            { elem: "Dopasowanie treści", icon: "done", iconColor: "green--text" },
                        ]
                    }
                ],
                right: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offer{
        .v-navigation-drawer{
            opacity: 0.9;
        }
        height: 100%;
    }

</style>
