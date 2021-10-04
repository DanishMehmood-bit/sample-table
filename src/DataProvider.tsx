import { PropertyDescription, PropertyRecord, PropertyValueFormat } from "@bentley/ui-abstract";
import { ColumnDescription, CompositeFilterDescriptorCollection, DistinctValueCollection, RowItem, TableDataChangeEvent, TableDataProvider } from "@bentley/ui-components";
import { SortDirection } from "@bentley/ui-core";

const columns: ColumnDescription[] = [{
    key: "test",
    label: "Test",
},
{
    key: "test2",
    label: "Test2",
},
]

const rows: RowItem[] = [
    {
        key: "test",
        cells: [
            {
                key: "test",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "one", displayValue: "one" }, { typename: "text", name: "test", displayLabel: "test" })
            },
            {
                key: "test2",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "two", displayValue: "two" }, { typename: "text", name: "test2", displayLabel: "test2" })
            }
        ]
    },
    {
        key: "test2",
        cells: [
            {
                key: "test",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "three", displayValue: "three" }, { typename: "text", name: "test", displayLabel: "test" })
            },
            {
                key: "test2",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "four", displayValue: "four" }, { typename: "text", name: "test2", displayLabel: "test2" })
            }
        ]
    },
    {
        key: "test3",
        cells: [
            {
                key: "test",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "five", displayValue: "five" }, { typename: "text", name: "test", displayLabel: "test" })
            },
            {
                key: "test2",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "six", displayValue: "six" }, { typename: "text", name: "test2", displayLabel: "test2" })
            }
        ]
    },
    {
        key: "test4",
        cells: [
            {
                key: "test",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "seven", displayValue: "seven" }, { typename: "text", name: "test", displayLabel: "test" })
            },
            {
                key: "test2",
                record: new PropertyRecord({ valueFormat: PropertyValueFormat.Primitive, value: "eight", displayValue: "eight" }, { typename: "text", name: "test2", displayLabel: "test2" })
            }
        ]
    }
]

export class DataProvider implements TableDataProvider {
    public onColumnsChanged: TableDataChangeEvent = new TableDataChangeEvent();
    public onRowsChanged: TableDataChangeEvent = new TableDataChangeEvent();

    getColumns(): Promise<ColumnDescription[]> {
        return Promise.resolve(columns)
    }
    getRowsCount(): Promise<number> {
        return Promise.resolve(4);
    }
    getRow(rowIndex: number, _unfiltered?: boolean): Promise<RowItem> {
        const row = rows[rowIndex];

        if (rowIndex === 1)
            row.colorOverrides = { backgroundColorSelected: 16711680, backgroundColor: 16711680 }

        return Promise.resolve(row)
    }
    sort(_columnIndex: number, _sortDirection: SortDirection): Promise<void> {
        throw new Error("Method not implemented.");
    }
    applyFilterDescriptors?: ((filterDescriptors: CompositeFilterDescriptorCollection) => Promise<void>) | undefined;
    getDistinctValues?: ((columnKey: string, maximumValueCount?: number | undefined) => Promise<DistinctValueCollection>) | undefined;
    getPropertyDisplayValueExpression?: ((property: string) => string) | undefined;

}