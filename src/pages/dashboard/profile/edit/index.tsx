import ProfileForm from '../../../../components/Form/ProfileForm';
import Layout from '../../../../components/EditProfile/Layout';
import UserReviews from '../../../../components/UserReviews';
import { useContext } from 'react';
import TalentLayerContext from '../../../../context/talentLayer';

function EditProfile() {
  const { user: currentUser } = useContext(TalentLayerContext);

  if (!currentUser) {
    return null
  }

  return (
    <Layout>
      <ProfileForm />
      <div className='my-6'>
        <UserReviews user={currentUser} />
      </div>
    </Layout>
  );
}

export default EditProfile;
