async function test() {

const table = base.getTable("tblDNZVvzTFokKAzU");
const record = await input.recordAsync("Pick a record", table);
console.log(record);

await main();

async function main() {

    if (record) {
        let baseId = record.getCellValueAsString('fldczfOXrv7TZWWpk');                  // 'Table Id' field's value in 'Overview' table in Superbase
        let tableId = record.getCellValueAsString('fld7UmbrvBVqcnSWJ');                 // 'Base Id' field's value in 'Overview' table in Superbase
        let parentTagName = record.getCellValueAsString('fldjwvY1VPB7ZFsJw');           // 'Project' field's value in 'Overview' table in Superbase
        let parentTagRecordId = record.getCellValueAsString('fldcnWRKRIcuXeob5');       // 'hash' field's value in 'Overview' table in Superbase
        // let differenceNumber = record.getCellValue('fld6FGUVx9grYd5uH');                // 'Difference number' field's value in 'Overview' table in Superbase
        // let cardsChecked = record.getCellValue('fldx5WluTKVXt5cOZ');                    // 'Count Checked' field's value in 'Overview' table in Superbase
        let totalCards = record.getCellValue('fldntdK6bKZ6qGy1V');                      // 'Total Cards' field's value in 'Overview' table in Superbase
        let cardsUnchecked = record.getCellValue('fldEBMJoUrXUQlUGl');                  // 'Count Unchecked' field's value in 'Overview' table in SuperBase
        let goal = record.getCellValue('flda5INsGMofWz74i');                            // 'Goal' field's value in 'Overview' table in SuperBase
        let subcategory = record.getCellValueAsString('fldgxT1Zpy8jvPPqk');             // 'Subcategory' field's value in ''Overview'' table
        let fieldIdCard = record.getCellValueAsString('fldrqSvMDux35FULD');             // 'Card' field's id in 'European Clubs' table
        let fieldIdAnswer = record.getCellValueAsString('fldqfGaki2IyXMAHt');           // 'Answer' field's id in 'European Clubs' table
        let fieldIdTier = record.getCellValueAsString('fldvTbPxrqftIcHpw');             // 'Tier' field's id in 'European Clubs' table
        let fieldIdParentTag = record.getCellValueAsString('fldCWxgXrGVQC5hkE');        // 'Parent-tag' field's id in 'European Clubs' table
        let fieldIdTags = record.getCellValueAsString('fldiilwuKTlTPNtmv');             // 'Tags' field's id in 'European Clubs' table
        let parentTagTeamId = record.getCellValueAsString('fldmD88ltE8hfkWxx');         // Used in DB to fetch cards
        let tagsTableId = record.getCellValueAsString('fldd9FRrJ0ekv6QKy');             // 'Tags - Football' field's table id in QMS
        let fieldIdTagStatus = record.getCellValueAsString('fldkxTmwj8P806Wb9');        // 'Status' field's id in 'Tags - Football' table
        let fieldIdTagsTable = record.getCellValueAsString('flduapecosTRowpyg');        // 'Tag' field's id in 'Tags - Football' table

        let cardsRequired = Math.floor(goal - (totalCards));

        // Return if cards required is zero or less
        if (cardsRequired <= 0) {
            console.log("Number in 'Goal' field is less than Total Cards");
            return;
        }

        console.log("Cards required: ", cardsRequired);

        let cardsFetched = 0;

        while (cardsFetched < cardsRequired) {
            let cardsToFetch = cardsRequired - cardsFetched > 500 ? 500 : cardsRequired - cardsFetched;

            let result = await fetch(`https://ovol2jfad6euzcrk3ama3wbfkq0pfahi.lambda-url.eu-west-2.on.aws/`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        parentTagName,
                        parentTagRecordId,
                        baseId,
                        tableId,
                        cardsRequired: cardsToFetch,
                        subcategory,
                        fieldIdCard,
                        fieldIdAnswer,
                        fieldIdTier,
                        fieldIdParentTag,
                        fieldIdTags,
                        parentTagTeamId,
                        tagsTableId,
                        fieldIdTagsTable,
                        fieldIdTagStatus
                    })
                });


                
            console.log(await result.json());

            cardsFetched += cardsToFetch;
            console.log("Cards fetched: ", cardsFetched);
        }

        // let result = await fetch(`https://uok7tunzatvzigucle7tbxnf740tznex.lambda-url.eu-west-2.on.aws/}`,
        // let result = await fetch(`https://govp2uhtwjbnharcbhnarh4iua0dfmhd.lambda-url.eu-west-2.on.aws/`,
        // let result = await fetch(`https://cu7iywmnqpe5bvsh3xpvxq4xwu0ypfrw.lambda-url.eu-west-2.on.aws/`,
        // let result = await fetch(`https://uok7tunzatvzigucle7tbxnf740tznex.lambda-url.eu-west-2.on.aws/`,
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             parentTagName,
        //             parentTagRecordId,
        //             baseId,
        //             tableId,
        //             cardsRequired,
        //             subcategory,
        //             fieldIdCard,
        //             fieldIdAnswer,
        //             fieldIdTier,
        //             fieldIdParentTag,
        //             fieldIdTags,
        //             parentTagTeamId,
        //             tagsTableId,
        //             fieldIdTagsTable,
        //             fieldIdTagStatus
        //         })
        //     });

        // console.log(await result.json());
    }
}
}

test();