<template>
	<div class="container">
		<div class="span9">
			<table class="table table-bordered table-striped">
				<thead style="background-image: linear-gradient(0deg, #FEF2EA, #FFFFFF)"><th colspan="4">{{ template }} использования</th></thead>
				<tbody>
					<tr>
						<td class="span4">Стоимость электоэнергии за {{ template }}, руб.</td>
						<td class="span2" v-for="item in costEnergyYear">{{ (item  * template.charAt(0)).toFixed(2)}}</td>
					</tr>
					 
					<tr>
						<td class="span4">Количество ламп под замену или условное количество ламп с 
							выработанным ресурсом за {{ template }}, шт.</td>
						<td class="span2" v-for="item in numberReplaceLamp">{{ Math.round(item * template.charAt(0)) }}</td>
					</tr>
					<tr>
						<td class="span4">Стоимость ламп под замену за {{ template }} (накопленная на замену ламп), руб.</td>
						<td class="span2" v-for="item in costNumberReplaceYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
					<tr>
						<td class="span4">Всего затрат за {{ template }}, руб.</td>
						<td class="span2" v-for="item in allCostYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
					<tr>
						<td class="span4">СБЕРЕЖЕНИЯ ЗА {{ template.toUpperCase() }} (по сравнению с лампами накаливания), руб.</td>
						<td class="span2" style = "font-weight: bold" v-for="item in savingYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts">
    import TableCalc from "./TableCalc";
    export default TableCalc;
</script>
