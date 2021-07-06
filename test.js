import test from 'ava';
import arvishTest from 'arvish-test';

test('result', async t => {
	const arvish = arvishTest({
		vars: {
			query: 'ec2 accept reserved' 
		}
	});
	const result = await arvish('node index.js {query}');

	t.deepEqual(result[0], {
		title: 'acceptReservedInstancesExchangeQuote',
		autocomplete: 'acceptReservedInstancesExchangeQuote',
		subtitle: 'Elastic Compute Cloud',
		arg: 'http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#acceptReservedInstancesExchangeQuote-property',
		quicklookurl: 'http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#acceptReservedInstancesExchangeQuote-property',
		icon: {
			path: './icons/EC2.png'
		},
		keywords: 'EC2 acceptReservedInstancesExchangeQuote Elastic Compute Cloud',
		count: 3
	});
});

test('fallback icon', async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js startsupport');

	t.deepEqual(result[0], {
		title: 'startSupportDataExport',
		autocomplete: 'startSupportDataExport',
		subtitle: 'Marketplace Commerce Analytics',
		arg: 'http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/MarketplaceCommerceAnalytics.html#startSupportDataExport-property',
		quicklookurl: 'http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/MarketplaceCommerceAnalytics.html#startSupportDataExport-property',
		icon: {
			path: './icons/aws.png'
		},
		keywords: 'MarketplaceCommerceAnalytics startSupportDataExport Marketplace Commerce Analytics',
		count: 1
	});
});
