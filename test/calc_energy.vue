<template>
	<div class="container">
		<div class="span12">
			<table class="table">
				<tbody>
					<tr>
					   <td class="span6">Количество ламп, шт.</td>
					   <td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="quantityLamp" 
								v-on:keypress="onlyInteger">
					   </td>
					   <td class="span2"></td>
					   <td class="span2"></td>
					</tr>
					<tr> 
					   <td class="span6">Количество часов работы ламп в год</td>
					   <td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model="hrYear" 
								v-on:keypress="onlyInteger">
						</td> 
					</tr> 
					<tr>
					   <td class="span6">Стоимость электроэнергии - 1 кВт*ч, руб.</td>
					   <td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="costEnergy" 
								v-on:keypress="onlyFloat">
						</td>	
					</tr>
					
					<tr>
						<td class="span6"></td>
						<td class="span2 shift">
							<div class="filam"></div>
							<div> Лампа накаливания {{ selectedPowerFilam }}W</div>						
						</td>				
						<td class="span2 shift">			
							<div class="lumin"></div>
							<div> Лампа компактная люминесцентная {{ selectedPowerLum }}W</div>							
						</td>					
						<td class="span2 shift">						
							<div class="led"></div>
							<div> Лампа светодиодная {{ selectedPowerSvet }}W</div>							
						</td>
					</tr>
					
					<tr>
						<td class="span6">Мощность лампы, Вт</td>
						<td class="span2">
							<select class="input-small" v-model="selectedPowerFilam">
								<option v-for="option in optionsFilam" v-bind:value="option.value">
									{{ option.text }}
								</option>
							</select>
						</td>
						<td class="span2">
							<select class="input-small" v-model="selectedPowerLum">
								<option v-for="option in optionsLum" v-bind:value="option.value">
									{{ option.text }}
								</option>
							</select>
						</td>
						<td class="span2">
							<select class="input-small" v-model="selectedPowerSvet">
								<option v-for="option in optionsSvet" v-bind:value="option.value">
									{{ option.text }}
								</option>
							</select>
						</td>
					</tr>
					
					<tr>
						<td class="span6">Суммарная мощность ламп, Вт</td>
						<td class="span2" v-for="item in sumPowerLamp">
							<input 
								class="input-small text-right" 
								style="font-weight: bold" type="text" 
								disabled v-bind:value="item">
						</td>
					</tr>
					
					<tr>
						<td class="span6">Потребляемая электроэнергия за год, кВт*час</td>
						<td class="span2" v-for="item in consumedEnergyYear">
							<input 
								class="input-small text-right" 
								style="font-weight: bold" type="text" 
								disabled v-bind:value="item">
						</td>
					</tr>
					
					<tr>
						<td class="span6">Срок службы ламп, часов</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="lifeTimeFilam" 
								v-on:keypress="onlyFloat">
						</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="lifeTimeLum" 
								v-on:keypress="onlyFloat">
						</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="lifeTimeSvet" 
								v-on:keypress="onlyFloat">
						</td>
					<tr>
					
					<tr>
						<td class="span6">Цена за лампу, руб.</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="costLampFilam" 
								v-on:keypress="onlyFloat">
						</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="costLampLum" 
								v-on:keypress="onlyFloat">
						</td>
						<td class="span2">
							<input 
								class="input-small text-right" type="text" 
								v-model.number="costLampSvet" 
								v-on:keypress="onlyFloat">
						</td>
					</tr>
					
					<tr>
						<td class="span6" style="font-weight: bold">Первоначальные инвестиции на покупку ламп, руб.</td>
						<td class="span2" v-for="item in primaryInvest">
							<input 
								class="input-small text-right" 
								style="font-weight: bold" type="text" 
								disabled v-bind:value="item">
						</td>	
					</tr>		
				</tbody>
			</table>
		</div>		
		<div v-for="item in year">
			<tablecalc-component v-bind:template="item"></tablecalc-component>
		</div>		
	</div>
</template>

<script lang="ts">
    import CalcProperty from "./CalcProperty";
    export default CalcProperty;
</script>
