<template>
<div>
	<div class="container">
	<h1>Энергосбережение</h1>
	</div>	
     
	<div class="container form-group">
		<form>
			<div class="control-group controls ">		
				<div class="row">
				   <div class="span4">Количество ламп, шт.</div>
				   <div class="span2">
                        <input 
                            class="form-control input-small text-right" type="text" 
                            v-model.number="quantityLamp" 
                            v-on:keypress="onlyInteger"
                            v-on:keyup="storeSet">
                   </div>
				</div>
				<div class="row"> 
				   <div class="span4">Количество часов работы ламп в год</div>
				   <div class="span2">
						<input 
							class="input-small text-right" type="text" 
							v-model="hrYear" 
							v-on:keypress="onlyInteger"
							v-on:keyup="storeSet">
					</div>
				</div>
				   
				<div class="row">
				   <div class="span4">Стоимость электроэнергии - 1 кВт*ч, руб.</div>
				   <div class="span2">
						<input 
							class="input-small text-right" type="text" 
							v-model.number="costEnergy" 
							v-on:keypress="onlyFloat"
							v-on:keyup="storeSet">
					</div>	
				</div>
			</div>
		</form>
	</div>
 
	<div class="container form-group">
		<form>
			<div class="control-group controls">
				<div class="row">
					<div class="span4">(Тип лампы)</div>
					<div class="span2">Лампа накаливания {{ selectedPowerFilam }}W</div>
					<div class="span2">Лампа компактная люминесцентная {{ selectedPowerLum }}W</div>
					<div class="span2">Лампа светодиодная {{ selectedPowerSvet }}W</div>
				</div>
				
				<div class="row">
					<div class="span4">Мощность лампы, Вт</div>
					<div class="span2">
						<select class="input-small" v-on:change="storeSet" v-model="selectedPowerFilam">
						<option v-for="option in optionsFilam" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
					<div class="span2">
						<select class="input-small" v-on:change="storeSet" v-model="selectedPowerLum">
						<option v-for="option in optionsLum" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
					<div class="span2">
						<select class="input-small" v-on:change="storeSet" v-model="selectedPowerSvet">
						<option v-for="option in optionsSvet" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
				</div>
				
				<div class="row">
					<div class="span4">Суммарная мощность ламп, Вт</div>
					<div class="span2" v-for="item in dataList"><input class="input-small text-right" type="text" disabled v-bind:value="item"></div>
					</div>
				
				<div class="row">
					<div class="span4">Потребляемая электроэнергия за год, кВт*час</div>
					<div class="span2" v-for="item in powerYear"><input class="input-small text-right" type="text" disabled v-bind:value="item"></input></div>
				</div>
				
				<div class="row">
					<div class="span4">Срок службы ламп, часов</div>
					<div class="span2">
						<input 
							class="input-small text-right" type="text" 
							v-model.number="lifeTimeFilam" 
							v-on:keypress="onlyFloat" 
							v-on:keyup="storeSet">
					</div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="lifeTimeLum" v-on:keypress="onlyFloat" v-on:keyup="storeSet"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="lifeTimeSvet" v-on:keypress="onlyFloat" v-on:keyup="storeSet"></div>
				</div>
				
				<div class="row">
					<div class="span4">Цена за лампу, руб.</div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampFilam" v-on:keypress="onlyFloat" v-on:keyup="storeSet"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampLum" v-on:keypress="onlyFloat" v-on:keyup="storeSet"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampSvet" v-on:keypress="onlyFloat" v-on:keyup="storeSet"></div>
				</div>
				
				<div class="row">
					<div class="span4">Первоначальные инвестиции на покупку ламп, руб.</div>
					<div class="span2" v-for="item in primaryInvest">
                        <input class="input-small text-right" type="text" disabled v-bind:value="item">
					</div>	
				</div>
			</div>
		</form>
	</div>
	<div v-for="item in Year">
		<tablecalc-component v-bind:template="item"></tablecalc-component>
	</div>
</div>

</template>

<script lang="ts">
    import CalcProperty from "./CalcProperty";
    export default CalcProperty;
</script>
