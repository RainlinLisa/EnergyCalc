<template>
	<div class="container">
	<h1>����������������</h1>
	</div>	
	<div class="container form-group">
		<form>
			<div class="control-group controls ">		
				<div class="row">
				   <div class="span4">���������� ����, ��.</div>
				   <div class="span2"><input class="form-control input-small text-right" type="text" v-model.number="quantityLamp" v-on:keypress="onlyInteger"></div>
				</div>
				  
				<div class="row"> 
				   <div class="span4">���������� ����� ������ ���� � ���</div>
				   <div class="span2"><input class="input-small text-right" type="text" v-model="hrYear" v-on:keypress="onlyInteger"></div>
				</div>
				   
				<div class="row">
				   <div class="span4">��������� �������������� - 1 ���*�, ���.</div>
				   <div class="span2"><input class="input-small text-right" type="text" v-model.number="costEnergy" v-on:keypress="onlyFloat"></div>	
				</div>
			</div>
		</form>
	</div>
 
	<div class="container form-group">
		<form>
			<div class="control-group controls">
				<div class="row">
					<div class="span4">(��� �����)</div>
					<div class="span2">����� ����������� {{ selectedPowerFilam }}W</div>
					<div class="span2">����� ���������� �������������� {{ selectedPowerLum }}W</div>
					<div class="span2">����� ������������ {{ selectedPowerSvet }}W</div>
				</div>
				
				<div class="row">
					<div class="span4">�������� �����, ��</div>
					<div class="span2">
						<select class="input-small" v-model="selectedPowerFilam">
						<option v-for="option in optionsFilam" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
					<div class="span2">
						<select class="input-small" v-model="selectedPowerLum">
						<option v-for="option in optionsLum" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
					<div class="span2">
						<select class="input-small" v-model="selectedPowerSvet">
						<option v-for="option in optionsSvet" v-bind:value="option.value">
							{{ option.text }}
						</option>
						</select>
					</div>
				</div>
				
				<div class="row">
					<div class="span4">��������� �������� ����, ��</div>
					<div class="span2"><input class="input-small form-control text-right" type="text" disabled v-model="powerLamp"></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
				</div>
				
				<div class="row">
					<div class="span4">������������ �������������� �� ���, ���*���</div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="powerYear"></input></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
				</div>
				
				<div class="row">
					<div class="span4">���� ������ ����, �����</div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="lifeTimeFilam" v-on:keypress="onlyFloat"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="lifeTimeLum" v-on:keypress="onlyFloat"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="lifeTimeSvet" v-on:keypress="onlyFloat"></div>
				</div>
				
				<div class="row">
					<div class="span4">���� �� �����, ���.</div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampFilam" v-on:keypress="onlyFloat"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampLum" v-on:keypress="onlyFloat"></div>
					<div class="span2"><input class="input-small text-right" type="text" v-model.number="costLampSvet" v-on:keypress="onlyFloat"></div>
				</div>
				
				<div class="row">
					<div class="span4">�������������� ���������� �� ������� ����, ���.</div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="primaryInvestFilam"></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
					<div class="span2"><input class="input-small text-right" type="text" disabled v-model="dummy"></div>
				</div>
			</div>
		</form>
	</div>
	
	<tableCalc-component></tableCalc-component>
	<tableCalc-component></tableCalc-component>
	<tableCalc-component></tableCalc-component>	
</template>

<script lang="ts">
    import CalcProperty from "./CalcProperty";
    export default CalcProperty;
</script>