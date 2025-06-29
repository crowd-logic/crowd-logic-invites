
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
import { Users, Mail, Calendar } from "lucide-react";

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
      console.log("Fetching signups from email_captures table...");
      
      const { data, error, count } = await supabase
        .from('email_captures')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      console.log("Supabase response:", { data, error, count });

      if (error) {
        console.error('Supabase error:', error);
        setError(`Database error: ${error.message}`);
      } else {
        console.log("Successfully fetched signups:", data);
        setSignups(data || []);
        setTotalCount(count || 0);
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
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
        <div className="text-white text-xl">Loading signups...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Email Signups Dashboard</h1>
          <p className="text-gray-300">View all email capture submissions</p>
          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-300">{error}</p>
              <p className="text-red-200 text-sm mt-2">
                Check console for more details. Make sure RLS policies are configured correctly.
              </p>
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
            ) : (
              <div className="text-center py-8 text-gray-400">
                {error ? 'Unable to load signups due to error above.' : 'No signups yet. Check back later!'}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSignups;
