import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Download, Plus, Trash2, Scale } from "lucide-react";

const PackingList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [packingItems, setPackingItems] = useState([
    { id: 1, description: "", quantity: "", grossWeight: "", netWeight: "", dimensions: "" }
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const addPackingItem = () => {
    const newId = Math.max(...packingItems.map(item => item.id)) + 1;
    setPackingItems([...packingItems, { 
      id: newId, 
      description: "", 
      quantity: "", 
      grossWeight: "", 
      netWeight: "", 
      dimensions: "" 
    }]);
  };

  const removePackingItem = (id: number) => {
    if (packingItems.length > 1) {
      setPackingItems(packingItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onToggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 lg:ml-0">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Export Packing List</h1>
                <p className="text-muted-foreground">Create detailed packing lists for export shipments</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  Templates
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>

            <Tabs defaultValue="create" className="space-y-4">
              <TabsList>
                <TabsTrigger value="create">Create Packing List</TabsTrigger>
                <TabsTrigger value="recent">Recent Lists</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-6">
                {/* Shipment Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipment Information</CardTitle>
                    <CardDescription>Basic shipment and consignment details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="packingListNumber">Packing List Number</Label>
                        <Input id="packingListNumber" placeholder="PL-2024-001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="packingDate">Date</Label>
                        <Input id="packingDate" type="date" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="invoiceReference">Invoice Reference</Label>
                        <Input id="invoiceReference" placeholder="INV-2024-001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lcNumber">L/C Number</Label>
                        <Input id="lcNumber" placeholder="LC123456789" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vesselName">Vessel Name</Label>
                        <Input id="vesselName" placeholder="MV Ocean Carrier" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="voyageNumber">Voyage Number</Label>
                        <Input id="voyageNumber" placeholder="V001" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Packing Items */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Package Details</CardTitle>
                        <CardDescription>Add items and their packing specifications</CardDescription>
                      </div>
                      <Button onClick={addPackingItem} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Package
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {packingItems.map((item) => (
                        <div key={item.id} className="p-4 border border-border rounded-sm space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Package {item.id}</h4>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => removePackingItem(item.id)}
                              disabled={packingItems.length === 1}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`description-${item.id}`}>Description of Goods</Label>
                              <Input 
                                id={`description-${item.id}`}
                                placeholder="Product description"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`quantity-${item.id}`}>Quantity</Label>
                              <Input 
                                id={`quantity-${item.id}`}
                                type="number"
                                placeholder="0"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`grossWeight-${item.id}`}>Gross Weight (KG)</Label>
                              <Input 
                                id={`grossWeight-${item.id}`}
                                type="number"
                                placeholder="0.00"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`netWeight-${item.id}`}>Net Weight (KG)</Label>
                              <Input 
                                id={`netWeight-${item.id}`}
                                type="number"
                                placeholder="0.00"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`dimensions-${item.id}`}>Dimensions (LxWxH)</Label>
                              <Input 
                                id={`dimensions-${item.id}`}
                                placeholder="100x50x30 cm"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`packingType-${item.id}`}>Packing Type</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select packing type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="carton">Carton</SelectItem>
                                  <SelectItem value="wooden-box">Wooden Box</SelectItem>
                                  <SelectItem value="pallet">Pallet</SelectItem>
                                  <SelectItem value="bundle">Bundle</SelectItem>
                                  <SelectItem value="bag">Bag</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`markings-${item.id}`}>Markings & Numbers</Label>
                              <Input 
                                id={`markings-${item.id}`}
                                placeholder="Package markings"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Container Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Container Information</CardTitle>
                    <CardDescription>Container and shipping details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="containerNumber">Container Number</Label>
                        <Input id="containerNumber" placeholder="TCLU1234567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="containerType">Container Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select container type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="20ft">20ft Container</SelectItem>
                            <SelectItem value="40ft">40ft Container</SelectItem>
                            <SelectItem value="40ft-hc">40ft High Cube</SelectItem>
                            <SelectItem value="45ft">45ft Container</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sealNumber">Seal Number</Label>
                        <Input id="sealNumber" placeholder="SEAL123456" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="totalPackages">Total Packages</Label>
                        <Input id="totalPackages" type="number" placeholder="0" readOnly />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Weight Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border border-border rounded-sm">
                        <div className="text-2xl font-bold text-foreground">0.00</div>
                        <div className="text-sm text-muted-foreground">Total Gross Weight (KG)</div>
                      </div>
                      <div className="text-center p-4 border border-border rounded-sm">
                        <div className="text-2xl font-bold text-foreground">0.00</div>
                        <div className="text-sm text-muted-foreground">Total Net Weight (KG)</div>
                      </div>
                      <div className="text-center p-4 border border-border rounded-sm">
                        <div className="text-2xl font-bold text-foreground">0</div>
                        <div className="text-sm text-muted-foreground">Total Packages</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Generate Packing List
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Packing Lists</CardTitle>
                    <CardDescription>View and manage your recent packing lists</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      No recent packing lists found. Create your first packing list to get started.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates">
                <Card>
                  <CardHeader>
                    <CardTitle>Packing List Templates</CardTitle>
                    <CardDescription>Pre-configured templates for different product types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Templates will be available soon. Use the create tab to build custom packing lists.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default PackingList;