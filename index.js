const propertyGroups = require('./groups.js')

module.exports = {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': propertyGroups.map((group) => ({
			// 默认同组属性之前需要空行
			emptyLineBefore: group?.emptyLineBefore || 'always',
			// 默认同组属性之间不允许空行
			noEmptyLineBetween: true,
			properties: group.properties,
		})),
	},
}
