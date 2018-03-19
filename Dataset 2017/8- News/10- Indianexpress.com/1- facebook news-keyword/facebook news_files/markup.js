var SI_MKP = window.SI_MKP || {};
SI_MKP.medalEvtsSkel=' <div class="event-block-wrap"><div class="event-item"><div class="event-text"><span>{{completed}}</span></div><div class="event-no"><span>{{compStats}}</span></div></div><div class="event-item"><div class="event-text"><span>{{pending}}</span></div><div class="event-no"><span>{{pendStats}}</span></div></div></div>';
SI_MKP.overAllMedalsList='<div class="si-table heading"><div class="si-table-tr"><div class="si-table-th si-country"><span>country</span></div><div class="si-table-th si-gold"><span>g</span></div><div class="si-table-th si-silver"><span>s</span></div><div class="si-table-th si-bronze"><span>b</span></div><div class="si-table-th si-total"><span>total</span></div></div></div><div class="si-content-wrapper si-scroll"><div class="si-table content">{{#each list}}{{#if_eq team_id "4"}}<div class="si-table-tr si-indian-row active">{{else}}<div class="si-table-tr">{{/if_eq}}<div class="si-table-td si-flag"><img src="{{getFlagPath team_id}}"></div><div class="si-table-td si-country"><span>{{team_name}}</span></div><div class="si-table-td si-gold"><span>{{gold_count}}</span></div><div class="si-table-td si-silver"><span>{{silver_count}}</span></div><div class="si-table-td si-bronze"><span>{{bronze_count}}</span></div><div class="si-table-td si-total"><span>{{medals_count}}</span></div></div>{{/each}}</div></div>';
SI_MKP.totalMedalsList='<div class="sish-medal-tableWrap"><div class="si-table"><div class="si-table-tr"><div class="si-table-th sish-table-country"> <span></span></div><div class="si-table-th sish-table-gold"> <span>g</span></div><div class="si-table-th sish-table-silver"> <span>s</span></div><div class="si-table-th sish-table-bronze"> <span>b</span></div><div class="si-table-th sish-table-total"> <span>TOT</span></div></div></div> </div> <div class="sish-medal-tableWrap si-scroll"><div class="si-table" id="totalMedalListCnt">{{#each list}}<div class="si-table-tr"><div class="si-table-td sish-table-country"> <span>{{rank}}.{{team_name}}</span></div><div class="si-table-td sish-table-gold"> <span>{{gold_count}}</span></div><div class="si-table-td sish-table-silver"> <span>{{silver_count}}</span></div><div class="si-table-td sish-table-bronze"> <span>{{bronze_count}}</span></div><div class="si-table-td sish-table-total"> <span>{{medals_count}}</span></div></div>{{/each}}</div> </div> <div class="sish-medal-tableWrap"><div class="si-table"><div class="si-table-tr si-indian-row active"><div class="si-table-td sish-table-country"> <span>{{india.rank}}.{{india.team_name}}</span></div><div class="si-table-td sish-table-gold"> <span>{{india.gold_count}}</span></div><div class="si-table-td sish-table-silver"> <span>{{india.silver_count}}</span></div><div class="si-table-td sish-table-bronze"> <span>{{india.bronze_count}}</span></div><div class="si-table-td sish-table-total"> <span>{{india.medals_count}}</span></div></div></div></div>';
SI_MKP.totalMedalsSkel='<div class="sish-totalMedal-wrap"><div class="sish-toalMedal-select sish-allSports si-dropdown"> <span></span> <span class="sish-medal-selected si-selected">{{sports.[0].sport}}</span> <div class="sish-medal-list si-dd-container">{{#each sports}}<div class="sish-medal-item si-option" data-sportid="{{sport_id}}"> <span class="si-name">{{sport}}</span></div>{{/each}} </div></div><div class="sish-medal-table" id="totalMedalListCnt"></div></div>';