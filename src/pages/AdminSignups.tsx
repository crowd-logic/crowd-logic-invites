
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Calendar, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmailCapture {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

const AdminSignups = () => {
  const [signups, setSignups] = useState<EmailCapture[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSignups();
  }, []);

  const fetchSignups = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching signups from email_captures table...");
      
      // Simplified approach - just fetch all data directly
      const { data, error } = await supabase
        .from('email_captures')
        .select('*')
        .order('created_at', { ascending: false });

      console.log("Supabase response:", { data, error });
      console.log("Raw data:", JSON.stringify(data, null, 2));

      if (error) {
        console.error('Supabase error:', error);
        setError(`Database error: ${error.message} (Code: ${error.code})`);
      } else {
        console.log("Successfully fetched signups:", data);
        setSignups(data || []);
        setTotalCount(data?.length || 0);
        setError(null);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError(`Network error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  const getThisWeekSignups = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return signups.filter(signup => {
      const signupDate = new Date(signup.created_at);
      return signupDate >= oneWeekAgo;
    }).length;
  };

  const getLatestSignup = () => {
    return signups.length > 0 ? signups[0] : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl flex items-center gap-2">
          <RefreshCw className="animate-spin h-5 w-5" />
          Loading signups...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Email Signups Dashboard</h1>
              <p className="text-gray-300">View all email capture submissions</p>
            </div>
            <Button onClick={fetchSignups} variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
          
          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-300 font-semibold">Error: {error}</p>
              <p className="text-red-200 text-sm mt-2">
                Check the browser console (F12) for more details. The data might be in your Supabase backend but not displaying due to RLS policies or connection issues.
              </p>
              <Button onClick={fetchSignups} className="mt-2 bg-red-600 hover:bg-red-700">
                Try Again
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Signups</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalCount}</div>
              <p className="text-xs text-gray-400 mt-1">
                {signups.length} records loaded
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{getThisWeekSignups()}</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Latest Signup</CardTitle>
              <Mail className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium text-white">
                {getLatestSignup() ? 
                  `${getLatestSignup()?.first_name} ${getLatestSignup()?.last_name}` : 
                  'No signups yet'
                }
              </div>
              {getLatestSignup() && (
                <div className="text-xs text-gray-400 mt-1">
                  {formatDate(getLatestSignup()!.created_at)}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">All Signups ({signups.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {signups.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-gray-300">Name</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Signup Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signups.map((signup) => (
                      <TableRow key={signup.id} className="border-slate-700">
                        <TableCell className="text-white font-medium">
                          {signup.first_name} {signup.last_name}
                        </TableCell>
                        <TableCell className="text-gray-300">{signup.email}</TableCell>
                        <TableCell className="text-gray-300">{formatDate(signup.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8">
                {error ? (
                  <div className="text-red-400">
                    <p>Unable to load signups due to error above.</p>
                    <p className="text-sm mt-2">Check your Supabase dashboard to verify the data exists.</p>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    <p>No signups found in the database.</p>
                    <p className="text-sm mt-2">Try submitting the form on the homepage to test.</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Debug Info */}
        <Card className="bg-slate-800/50 border-slate-700 mt-6">
          <CardHeader>
            <CardTitle className="text-white text-sm">Debug Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Database Table: email_captures</p>
              <p>Total Count from DB: {totalCount}</p>
              <p>Records Loaded: {signups.length}</p>
              <p>Has Error: {error ? 'Yes' : 'No'}</p>
              <p>Loading State: {loading ? 'Yes' : 'No'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSignups;
